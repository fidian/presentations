import { component, css, html } from "../js/fudgel.js";

component(
    "totp-demo",
    {
        attr: ["value"],
        style: css`
            .bar {
                height: 5px;
                background-color: green;
                transition: width 0.1s linear;
            }
        `,
        template: html`
            <input type="text" #ref="input" value="{{ value }}" />
            <br />
            {{ totp }}
            <div class="bar" #ref="bar"></div>
        `
    },
    class {
        bar;
        input;
        value = "";
        lastValue = "";
        lastTimeSlice = 0;
        timeLeft = 0;
        totp = "123 456";
        interval;

        constructor() {
            this.interval = setInterval(() => {
                this.value = this.input.value;
                this.timeLeft = 30 - (Date.now() % 30000) / 1000;
                const timeSlice = Math.floor(Date.now() / 30000);
                this.bar.style.width = `${(this.timeLeft / 30) * 100}%`;
                if (
                    this.value === this.lastInputValue &&
                    timeSlice === this.lastTimeSlice
                )
                    return;
                this.lastInputValue = this.value;
                this.lastTimeSlice = timeSlice;
                generateTOTP(this.value).then((totp) => {
                    this.totp = totp.match(/.{1,3}/g).join(" ");
                });
            }, 100);
        }

        onDestroy() {
            this.clearInterval(this.interval);
        }
    }
);

async function generateTOTP(
    base32Secret = "QWERTY",
    interval = 30,
    length = 6,
    algorithm = "SHA-1"
) {
    //  Are the interval and length valid?
    if (interval < 1) throw new Error("Interval is too short");
    if (length < 1) throw new Error("Length is too low");
    if (length > 10) throw new Error("Length is too high");

    //  Is the algorithm valid?
    //  https://datatracker.ietf.org/doc/html/rfc6238#section-1.2
    algorithm = algorithm.toUpperCase();
    if (algorithm.match("SHA-1|SHA-256|SHA-384|SHA-512") == null)
        throw new Error("Algorithm not known");

    //  Decode the secret
    //  The Base32 Alphabet is specified at https://datatracker.ietf.org/doc/html/rfc4648#section-6
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
    let bits = "";

    //  Some secrets are padded with the `=` character. Remove padding.
    //  https://datatracker.ietf.org/doc/html/rfc3548#section-2.2
    base32Secret = base32Secret.replace(/=+$/, "");

    //  Loop through the trimmed secret
    for (let char of base32Secret) {
        //  Ensure the secret's characters are upper case
        const value = alphabet.indexOf(char.toUpperCase());

        //  If the character doesn't appear in the alphabet.
        if (value === -1) throw new Error("Invalid Base32 character");

        //  Binary representation of where the character is in the alphabet
        bits += value.toString(2).padStart(5, "0");
    }

    //  Turn the bits into bytes
    let bytes = [];
    //  Loop through the bits, eight at a time
    for (let i = 0; i < bits.length; i += 8) {
        if (bits.length - i >= 8) {
            bytes.push(parseInt(bits.substring(i, i + 8), 2));
        }
    }

    //  Turn those bytes into an array
    const decodedSecret = new Uint8Array(bytes);

    //  Number of seconds since Unix Epoch
    const timeStamp = Date.now() / 1000;

    //  Number of intervals since Unix Epoch
    //  https://datatracker.ietf.org/doc/html/rfc6238#section-4.2
    const timeCounter = Math.floor(timeStamp / interval);

    //  Number of intervals in hexadecimal
    const timeHex = timeCounter.toString(16);

    //  Left-Pad with 0
    const paddedHex = timeHex.toString(2).padStart(16, "0");

    //  Set up a buffer to hold the data
    const timeBuffer = new ArrayBuffer(8);
    const timeView = new DataView(timeBuffer);

    //  Take the hex string, split it into 2-character chunks
    const timeBytes = paddedHex.match(/.{1,2}/g).map(
        //  Convert to bytes
        (byte) => parseInt(byte, 16)
    );

    //  Write each byte into timeBuffer.
    for (let i = 0; i < 8; i++) {
        timeView.setUint8(i, timeBytes[i]);
    }

    //  Use Web Crypto API to generate the HMAC key
    //  https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey
    const key = await crypto.subtle.importKey(
        "raw",
        decodedSecret,
        {
            name: "HMAC",
            hash: algorithm
        },
        false,
        ["sign"]
    );

    //  Sign the timeBuffer with the generated HMAC key
    //  https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/sign
    const signature = await crypto.subtle.sign("HMAC", key, timeBuffer);

    //  Get HMAC as bytes
    const hmac = new Uint8Array(signature);

    //  https://datatracker.ietf.org/doc/html/rfc4226#section-5.4
    //  Use the last byte to generate the offset
    const offset = hmac[hmac.length - 1] & 0x0f;

    //  Bit Twiddling operations
    const binaryCode =
        ((hmac[offset] & 0x7f) << 24) |
        ((hmac[offset + 1] & 0xff) << 16) |
        ((hmac[offset + 2] & 0xff) << 8) |
        (hmac[offset + 3] & 0xff);

    //  Turn the binary code into a decimal string
    const stringOTP = binaryCode.toString();

    //  Count backwards from the last character for the length of the code
    //  Pad with 0 to full length
    const otp = stringOTP.slice(-length).padStart(length, "0");

    //  All done!
    return otp;
}
