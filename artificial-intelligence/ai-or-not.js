import { component, css, html } from '../js/fudgel.js';

const scenarios = [
    {
        number: 1,
        title: "Basic Calculator",
        description: "A basic calculator performing mathematical operations.",
        answer: false,
        explanation:
            "This is simple automation following pre-programmed rules.",
        discussion:
            "The difference between automation and AI, understanding fixed rules versus learning and recognizing basic computation.",
        scoutConnection: null,
        followUpQuestions: [
            "What makes this different from AI?",
            "Could this become AI? How?",
            "What would need to change?"
        ]
    },
    {
        number: 2,
        title: "Smart Chess Program",
        description:
            "A chess program that improves its strategy by analyzing past games.",
        answer: true,
        explanation: "The program learns and adapts from experience.",
        discussion:
            "Understanding machine learning, recognition of pattern analysis, and the concept of improvement through experience.",
        scoutConnection: "Chess merit badge",
        followUpQuestions: [
            "How does the program learn?",
            "What data does it use?",
            "How is this different from a basic calculator?"
        ]
    },
    {
        number: 3,
        title: "Weather Prediction App",
        description:
            "A smartphone app that predicts weather patterns and adjusts forecasts based on actual outcomes.",
        answer: true,
        explanation:
            "The system learns from past predictions and actual weather patterns to improve future forecasts.",
        discussion:
            "Predictive analytics, data pattern recognition, and continuous learning systems.",
        scoutConnection:
            "Weather prediction for outdoor activities and camping",
        followUpQuestions: [
            "How does weather prediction help in Scout activities?",
            "What data does the system use?",
            "How does it improve over time?"
        ]
    },
    {
        number: 4,
        title: "Digital Alarm Clock",
        description: "A basic digital alarm clock that goes off at set times.",
        answer: false,
        explanation:
            "Simple time-based trigger without learning or adaptation.",
        discussion:
            "The difference between programming and AI, understanding automated systems, recognition of simple triggers.",
        scoutConnection: "Camp schedule management",
        followUpQuestions: [
            'What would make this alarm clock "smart"?',
            "How is this different from a smart home system?",
            "What features would add AI capabilities?"
        ]
    },
    {
        number: 5,
        title: "Music Recommendation System",
        description:
            "A streaming service that suggests songs based on listening history.",
        answer: true,
        explanation:
            "Uses machine learning to understand preferences and make personal recommendations.",
        discussion:
            "Pattern recognition in user behavior, personalization algorithms, content recommendation systems.",
        scoutConnection: "Music merit badge",
        followUpQuestions: [
            "How does the system learn your preferences?",
            "What patterns might it identify?",
            "How could this technology help in other areas?"
        ]
    },
    {
        number: 6,
        title: "Traffic Light Timer",
        description: "A traffic light that changes at fixed intervals.",
        answer: false,
        explanation: "Operates on predetermined timing without adaptation.",
        discussion:
            "Fixed automation vs. adaptive systems, understanding basic programming, recognition of scheduled tasks.",
        scoutConnection: "Traffic Safety merit badge",
        followUpQuestions: [
            'What would make this traffic light "smart"?',
            "How could AI improve traffic flow?",
            "What sensors would be needed?"
        ]
    },
    {
        number: 7,
        title: "Smart Traffic Management",
        description:
            "Traffic lights that adjust timing based on current traffic patterns.",
        answer: true,
        explanation:
            "System learns and adapts to traffic patterns in real-time.",
        discussion:
            "Real-time data analysis, adaptive systems, pattern recognition.",
        scoutConnection: "Traffic Safety merit badge",
        followUpQuestions: [
            "How does this improve traffic flow?",
            "What data does it collect?",
            "How does it handle special events?"
        ]
    },
    {
        number: 8,
        title: "Automatic Door",
        description: "A store door that opens when someone approaches.",
        answer: false,
        explanation:
            "Simple motion sensor trigger without learning capability.",
        discussion:
            "Basic automation, sensor technology, trigger-response systems.",
        scoutConnection: "Engineering merit badge",
        followUpQuestions: [
            "What sensors does it use?",
            "How is this different from AI?",
            'What would make it "smart"?'
        ]
    },
    {
        number: 9,
        title: "Smart Home Security",
        description:
            "A security system that learns household patterns and alerts for unusual activity.",
        answer: true,
        explanation: "System learns normal patterns and identifies anomalies.",
        discussion:
            "Pattern recognition, anomaly detection, adaptive learning.",
        scoutConnection: "Crime Prevention merit badge",
        followUpQuestions: [
            "What patterns might it learn?",
            'How does it identify "unusual" activity?',
            "What privacy concerns exist?"
        ]
    },
    {
        number: 10,
        title: "Automated Sprinkler System",
        description: "Lawn sprinklers that turn on at scheduled times.",
        answer: false,
        explanation: "Simple timer-based automation without adaptation.",
        discussion:
            "Scheduled automation, basic programming, time-based triggers.",
        scoutConnection: "Gardening merit badge",
        followUpQuestions: [
            "How could this system be improved?",
            'What would make it "smart"?',
            "How could it be more efficient?"
        ]
    },
    {
        number: 11,
        title: "Smart Irrigation System",
        description:
            "Sprinklers that adjust watering based on soil moisture, weather forecasts, and plant needs.",
        answer: true,
        explanation:
            "System learns optimal watering patterns using multiple data sources.",
        discussion:
            "Multi-factor decision making, environmental adaptation, resource optimization.",
        scoutConnection: "Environmental Science merit badge",
        followUpQuestions: [
            "What factors influence its decisions?",
            "How does it save water?",
            "What sensors does it use?"
        ]
    },
    {
        number: 12,
        title: "Vending Machine",
        description:
            "A basic vending machine that dispenses items when money is inserted.",
        answer: false,
        explanation: "Simple input-output machine without learning capability.",
        discussion:
            "Basic automation, input-output systems, mechanical responses.",
        scoutConnection: "American Business merit badge",
        followUpQuestions: [
            "How does it verify payment?",
            'What would make it "smart"?',
            "How could AI improve it?"
        ]
    },
    {
        number: 13,
        title: "Language Translation App",
        description:
            "An app that translates between languages and improves with user corrections.",
        answer: true,
        explanation:
            "System learns from user feedback and context to improve translations.",
        discussion:
            "Language processing, learning from feedback, context understanding.",
        scoutConnection: "American Cultures merit badge",
        followUpQuestions: [
            "How does it handle new phrases?",
            "What makes translations accurate?",
            "How does it learn from corrections?"
        ]
    },
    {
        number: 14,
        title: "Digital Thermostat",
        description: "A thermostat that maintains a set temperature.",
        answer: false,
        explanation:
            "Simple temperature control without learning or adaptation.",
        discussion:
            "Temperature sensors, basic control systems, fixed responses.",
        scoutConnection: "Home energy management",
        followUpQuestions: [
            "How does it maintain temperature?",
            'What would make it "smart"?',
            "How could AI improve efficiency?"
        ]
    },
    {
        number: 15,
        title: "Homework Helper",
        description:
            "An app that solves math problems by following fixed formulas.",
        answer: false,
        explanation:
            "Uses programmed rules without understanding or adaptation.",
        discussion:
            "Algorithm vs. AI, rule-based systems, fixed problem-solving.",
        scoutConnection: "Scholarship merit badge",
        followUpQuestions: [
            "How does it solve problems?",
            "What are its limitations?",
            "How could AI improve it?"
        ]
    },
    {
        number: 16,
        title: "Smart Study Tutor",
        description:
            "An educational app that adapts to student learning patterns and adjusts teaching methods.",
        answer: true,
        explanation:
            "System learns from student responses and adjusts teaching approach.",
        discussion:
            "Adaptive learning, personalization, educational assessment.",
        scoutConnection: "Scholarship merit badge",
        followUpQuestions: [
            "How does it identify learning styles?",
            "What patterns does it recognize?",
            "How does it adjust methods?"
        ]
    },
    {
        number: 17,
        title: "Automatic Hand Dryer",
        description:
            "A bathroom hand dryer that activates when hands are present.",
        answer: false,
        explanation: "Simple sensor-triggered response without learning.",
        discussion:
            "Sensor technology, basic automation, trigger-response systems.",
        scoutConnection: "Engineering merit badge",
        followUpQuestions: [
            "What type of sensor does it use?",
            "How is this different from AI?",
            'What would make it "smart"?'
        ]
    },
    {
        number: 18,
        title: "Smart Energy Monitor",
        description:
            "A home system that learns energy usage patterns and suggests optimizations.",
        answer: true,
        explanation:
            "System analyzes patterns and provides adaptive recommendations.",
        discussion:
            "Pattern analysis, predictive modeling, resource optimization.",
        scoutConnection: "Energy merit badge",
        followUpQuestions: [
            "What patterns does it analyze?",
            "How does it make recommendations?",
            "How does this save energy?"
        ]
    },
    {
        number: 19,
        title: "Automated Manufacturing Line",
        description:
            "A factory line that assembles products in a fixed sequence.",
        answer: false,
        explanation: "Programmed sequence of actions without adaptation.",
        discussion:
            "Industrial automation, sequential operations, fixed programming.",
        scoutConnection: "Engineering merit badge",
        followUpQuestions: [
            "How is the sequence programmed?",
            'What would make it "smart"?',
            "How could AI improve it?"
        ]
    },
    {
        number: 20,
        title: "Quality Control System",
        description:
            "A manufacturing system that learns to identify defects from examples.",
        answer: true,
        explanation:
            "System learns to recognize and classify defects through training.",
        discussion:
            "Visual recognition, quality assessment, learning from examples.",
        scoutConnection: "Engineering merit badge",
        followUpQuestions: [
            "How does it learn to identify defects?",
            "What makes it more reliable than humans?",
            "How does it handle new types of defects?"
        ]
    }
];

component(
    "ai-or-not",
    {
        style: css`
            :host {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                height: 14em;
                width: 100%;
                background-color: blue;
                font-family: monospace;
            }

            button {
                font-family: inherit;
                padding: 0.5em 1em;
            }

            .spinner {
                font-size: 1em;
            }

            .description {
                font-size: 0.5em;
                text-align: center;
            }

            .answer {
                font-size: 1.5em;
                color: white;
                font-weight: bold;
                padding: 0.5em 1em;
            }

            .answer.true {
                background-color: green;
            }

            .answer.false {
                background-color: red;
            }

            .header {
                font-size: 0.4em;
                margin-bottom: 0.5em;
            }
        `,
        template: html`
        <div class="header">
            Played {{ played }} games -
            <button disabled="{{ spinning }}" @click="pickRandomScenario()">Pick a Random Scenario</button>
            - Remaining {{ scenarios.length }}
        </div>
        <div class="spinner" *if="scenario">
            {{ scenario?.title }}
        </div>
        <div class="description" *if="scenario && !spinning">
            <p>{{ scenario?.description }}</p>
            <button *if="!revealed" @click="reveal()">AI or Not?</button>
            <p *if="revealed && scenario?.answer"><span class="answer true">AI!</span></p>
            <p *if="revealed && !scenario?.answer"><span class="answer false">Not AI!</span></p>
            <p *if="revealed">{{ scenario?.explanation }}</p>
            <p *if="revealed && scenario?.discussion"><strong>Discuss:</strong> {{ scenario?.discussion }}</p>
            <div *if="revealed && scenario?.followUpQuestions?.length">
                <ul>
                    <li *for="question of scenario?.followUpQuestions">{{ question }}</li>
                </ul>
            </div>
        </div>
    `
    },
    class {
        played = 0;
        spinning = false;
        scenario = null;
        revealed = false;
        scenarios = scenarios;

        reveal() {
            this.revealed = true;
        }

        pickRandomScenario() {
            if (this.spinning) return;
            this.spinning = true;
            this.scenario = null;
            this.revealed = false;
            this.spinScenarioNumber(1, 0.001);
        }

        spinScenarioNumber(delay, multInc) {
            const randomIndex = Math.floor(Math.random() * scenarios.length);
            this.scenario = scenarios[randomIndex];

            if (delay < 500) {
                const nextDelay = delay * (1 + multInc);
                const nextMult = multInc * 1.05;
                setTimeout(() => {
                    this.spinScenarioNumber(nextDelay, nextMult);
                }, nextDelay);
            } else {
                this.spinning = false;
                this.played += 1;
                this.scenarios = this.scenarios.filter((s) => s !== this.scenario);
            }
        }
    }
);
