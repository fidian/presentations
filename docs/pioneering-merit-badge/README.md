# Programming Merit Badge Scout Handout

Tyler Akins, 612-387-8102, fidian@rumkin.com (for adults and Scouts with Cyber Chip).

Handout is available online at [https://github.com/fidian/presentations/programming-merit-badge](https://github.com/fidian/presentations/programming-merit-badge)

## Requirements Not In Slideshow

**1a.** Obtain your Level II (Green) Cyber Chip. Requirements are at [https://goo.gl/3M6kQJ](https://goo.gl/3M6kQJ)

<!-- https://meritbadge.org/wiki/index.php/Cyber_Chip_%28Grades_6-12%29 -->

**3a.** Top 10 programming languages in 2019.

| Name        | Where        | How Used                                   |
|-------------|--------------|--------------------------------------------|
| SQL         | Everywhere   | Find information in databases              |
| Java        | Big Business | Common coding platform + Android           |
| Python      | Several      | Scripting language, simple effective       |
| JavaScript  | Web Pages    | Provides interaction with users            |
| C           | Everywhere   | System level programming                   |
| C++         | Everywhere   | Larger programs, still mostly system level |
| C#          | Microsoft    | Desktops, tablets, phones                  |
| Perl, Shell | Unix         | Quick data manipulation programs           |
| Swift       | Apple        | Desktops, tablets, phones                  |
| PHP         | Web Servers  | Fill web pages with dynamic info           |

**5a.** Fix the following program.

```
10 home
20 number = 1
30 print number " little ";
40 if number / 3 == int(number / 3) then print "cub scouts";
50 print
60 number = number + 1
70 if number >= 10 goto 30
```

**5b.** I suggest some visual programming using Code.org. This website has "hour of code" challenges, which are short and fun. Select one and follow it to the end. [https://code.org/hourofcode/overview](https://code.org/hourofcode/overview)

**5c.** I suggest to use JavaScript in a browser and write a guessing game where the user has to guess a secret number. After each guess, the program will report if the guess was too large or too small. At the end, the number of tries needed should be printed. Write the program using an editor (Wordpad, Google Docs, an email) and copy it to the browser.

```
// This is a comment.

// Make a random number between 0 and 1, like 0.366791268.
float = Math.random();

// Makes a random whole number from 1 to 100.
num = Math.floor(Math.random() * 99) + 1);

// Ask the user for information and returns a string.
userInput = prompt("message here");

// Writes a message to the console.
console.log("Hello, world!");

// Displays a message and the value of a variable.
console.log("Your input is", userInput);

// Converts a number string into a number value.
asNumber = parseInt(userInput);

// Tests if a number is outside of the range from 10 to 20. "||" means "or".
num < 10 || num > 20

// Tests if a number is between 10 and 20. "&&" means "and".
num >= 10 && num <= 20
```

To help complete this requirement, here is a sample program that prints out the sum of all numbers from 1 to the number a user entered.

```
// 1. Initialize some values
sum = 0;
current = 1;

// 2. Ask the user where the program should stop.
endNumber = prompt("What number should I end at?")

// 3. Loop until we count up to that number.
// Notice how the endNumber is converted and checked here
while (endNumber !== "" && + endNumber >= current) {
	sum = sum + current;
	current = current + 1;
}

// 4. Display the sum
console.log("The sum:", sum);

// 5. Show if the sum is greater than 100 or not.
if (sum > 100) {
	console.log("This is over 100.");
} else {
	console.log("This is not over 100.");
}
```

