const scenarios2 = [
    {
        number: 1,
        title: "School Admissions",
        description:
            "An AI system is making decisions about which students get into a school program by using AI to review student applications.",
        considerations: [
            {
                topic: "Data inputs",
                points: ["Grades", "Test scores", "Extracurricular activities"]
            },
            {
                topic: "Demographics",
                points: [
                    "Potential biases:",
                    "Historical data bias",
                    "Demographic bias",
                    "Geographic bias"
                ]
            },
            {
                topic: "Human oversight",
                points: [
                    "Review processes",
                    "Appeal mechanisms",
                    "Regular audits."
                ]
            }
        ],
        scoutLawConnections: [
            "Trustworthy: Ensuring transparent processes",
            "Kind: Considering individual circumstances"
        ],
        discussionQuestions: [
            "How can we ensure the system is fair?",
            "What role should humans play?",
            "How does this relate to Scout values?"
        ]
    },
    {
        number: 2,
        title: "AI Healthcare Assistant",
        description:
            "A hospital is implementing an AI system to prioritize emergency room patients using vital signs and symptoms to recommend treatment order.",
        considerations: [
            {
                topic: "Data Inputs",
                points: [
                    "Patient vital signs",
                    "Reported symptoms",
                    "Medical history",
                    "Age and risk factors"
                ]
            },
            {
                topic: "Potential Issues",
                points: [
                    "Life-or-death decisions",
                    "System errors or biases",
                    "Override procedures",
                    "Responsibility allocation"
                ]
            },
            {
                topic: "Stakeholder Impact",
                points: [
                    "Patients",
                    "Medical staff",
                    "Hospital administration",
                    "Emergency responders"
                ]
            }
        ],
        scoutLawConnections: [
            "Helpful: Ensuring proper care for all",
            "Courteous: Respecting patient needs",
            "Kind: Considering individual circumstances",
            "Brave: Making difficult decisions"
        ],
        discussionQuestions: [
            "Who is responsible if the system makes a mistake?",
            "How should human judgment be incorporated?",
            "What backup systems should be in place?"
        ]
    },
    {
        number: 3,
        title: "AI in Law Enforcement",
        description:
            "Police department is using AI to predict high-crime areas by analyzing historical crime data to allocate patrol resources.",
        considerations: [
            {
                topic: "Data Analysis",
                points: [
                    "Historical crime statistics",
                    "Demographic information",
                    "Socioeconomic factors",
                    "Time and location patterns"
                ]
            },
            {
                topic: "Ethical Concerns",
                points: [
                    "Racial bias",
                    "Community impact",
                    "Privacy rights",
                    "Resource allocation"
                ]
            },
            {
                topic: "Implementation Challenges",
                points: [
                    "Officer training",
                    "Community trust",
                    "System transparency",
                    "Accountability measures"
                ]
            }
        ],
        scoutLawConnections: [
            "Trustworthy: Maintaining public trust",
            "Loyal: Serving all communities fairly",
            "Helpful: Protecting public safety",
            "Brave: Addressing difficult issues"
        ],
        discussionQuestions: [
            "How can we ensure fair treatment of all communities?",
            "What oversight should be in place?",
            "How should this data be used responsibly?",
            "What role does human judgment play?"
        ]
    },
    {
        number: 4,
        title: "Educational Assessment AI",
        description:
            "School system implementing AI to grade essays and assignment by using AI to evaluate writing quality, content, and creativity.",
        considerations: [
            {
                topic: "Assessment Criteria",
                points: [
                    "Writing mechanics",
                    "Content understanding",
                    "Creativity measures",
                    "Learning objectives"
                ]
            },
            {
                topic: "Potential Challenges",
                points: [
                    "Subjective evaluation",
                    "Cultural sensitivity",
                    "Language differences",
                    "Creative expression"
                ]
            },
            {
                topic: "Student Impact",
                points: [
                    "Learning motivation",
                    "Fair assessment",
                    "Feedback quality",
                    "Educational growth"
                ]
            }
        ],
        scoutLawConnections: [
            "Trustworthy: Ensuring fair evaluation",
            "Helpful: Supporting learning",
            "Kind: Considering individual needs"
        ],
        discussionQuestions: [
            "How can creativity be fairly assessed?",
            "What appeals process should exist?",
            "How should cultural differences be handled?",
            "What role should human teachers play?"
        ]
    },
    {
        number: 5,
        title: "Environmental Monitoring",
        description:
            "AI system making decisions about resource usage and environmental protection by controlling water usage, energy consumption, and waste management.",
        considerations: [
            {
                topic: "Resource Management",
                points: [
                    "Water allocation",
                    "Energy distribution",
                    "Waste handling",
                    "Conservation goals"
                ]
            },
            {
                topic: "Competing Needs",
                points: [
                    "Environmental protection",
                    "Community needs",
                    "Economic interests",
                    "Long-term sustainability"
                ]
            },
            {
                topic: "Impact Assessment",
                points: [
                    "Environmental effects",
                    "Community access",
                    "Economic consequences",
                    "Future generations"
                ]
            }
        ],
        scoutLawConnections: [
            "Thrifty: Conserving resources",
            "Clean: Protecting environment",
            "Helpful: Supporting community needs"
        ],
        discussionQuestions: [
            "How should different needs be balanced?",
            "What priorities should guide decisions?",
            "How can fairness be ensured?",
            "What role does conservation play?"
        ]
    },
    {
        number: 6,
        title: "Social Media Content Moderation",
        description:
            "AI system moderates online content for youth platforms by filtering inappropriate content and monitoring interactions.",
        considerations: [
            {
                topic: "Content Evaluation",
                points: [
                    "Age appropriateness",
                    "Cultural sensitivity",
                    "Context understanding",
                    "Safety concerns"
                ]
            },
            {
                topic: "Protection Measures",
                points: [
                    "User safety",
                    "Privacy protection",
                    "Bullying prevention",
                    "Information security"
                ]
            },
            {
                topic: "Implementation Challenges",
                points: [
                    "False positives/negatives",
                    "Context interpretation",
                    "Freedom of expression",
                    "Community standards"
                ]
            }
        ],
        scoutLawConnections: [
            "Clean: Maintaining appropriate content",
            "Courteous: Preventing harassment",
            "Friendly: Supporting positive interaction",
            "Brave: Addressing harmful content"
        ],
        discussionQuestions: [
            "How strict should filtering be?",
            "What appeals process is needed?",
            "How should context be considered?",
            "What role do human moderators play?"
        ]
    },
    {
        number: 7,
        title: "Transportation Safety",
        description:
            "AI system controlling autonomous vehicles making split-second decisions in potential accident scenarios.",
        considerations: [
            {
                topic: "Safety Priorities",
                points: [
                    "Passenger protection",
                    "Pedestrian safety",
                    "Property protection",
                    "Emergency response"
                ]
            },
            {
                topic: "Decision Factors",
                points: [
                    "Risk assessment",
                    "Damage minimization",
                    "Legal requirements",
                    "Ethical guidelines"
                ]
            },
            {
                topic: "Responsibility Issues",
                points: [
                    "Decision accountability",
                    "Insurance implications",
                    "Legal liability",
                    "Moral responsibility"
                ]
            }
        ],
        scoutLawConnections: [
            "Trustworthy: Ensuring safety",
            "Helpful: Protecting others",
            "Brave: Making difficult choices",
            "Loyal: Prioritizing human life"
        ],
        discussionQuestions: [
            "How should priorities be programmed?",
            "Who is responsible for decisions?",
            "What safety measures are needed?",
            "How should risks be balanced?"
        ]
    },
    {
        number: 8,
        title: "Financial Services",
        description:
            "AI system approving or denying loan applications by evaluating creditworthiness and financial risk.",
        considerations: [
            {
                topic: "Assessment Criteria",
                points: [
                    "Credit history",
                    "Income stability",
                    "Debt ratios",
                    "Financial patterns"
                ]
            },
            {
                topic: "Fairness Issues",
                points: [
                    "Economic equality",
                    "Access to credit",
                    "Historical bias",
                    "Demographic factors"
                ]
            },
            {
                topic: "Impact Analysis",
                points: [
                    "Individual opportunity",
                    "Community development",
                    "Economic mobility",
                    "Social equity"
                ]
            }
        ],
        scoutLawConnections: [
            "Trustworthy: Fair evaluation",
            "Thrifty: Financial responsibility",
            "Helpful: Supporting opportunity"
        ],
        discussionQuestions: [
            "How can bias be prevented?",
            "What appeals process is needed?",
            "How should special circumstances be considered?",
            "What role should human judgment play?"
        ]
    },
    {
        number: 9,
        title: "Employment Screening",
        description: "AI system screening job applications and resumes.",
        considerations: [
            {
                topic: "Evaluation Criteria",
                points: [
                    "Skills assessment",
                    "Experience matching",
                    "Qualification verification"
                ]
            },
            {
                topic: "Fairness Concerns",
                points: [
                    "Bias prevention",
                    "Equal opportunity",
                    "Diverse hiring",
                    "Special circumstances"
                ]
            },
            {
                topic: "Implementation Issues",
                points: [
                    "Transparency",
                    "Appeals process",
                    "Human oversight",
                    "Communication methods"
                ]
            }
        ],
        scoutLawConnections: [
            "Friendly: Respectful treatment",
            "Kind: Understanding circumstances",
            "Helpful: Supporting careers"
        ],
        discussionQuestions: [
            "How can fairness be ensured?",
            "What oversight is needed?",
            "How should unique situations be handled?",
            "What role should human recruiters play?"
        ]
    },
    {
        number: 10,
        title: "Personal Privacy",
        description:
            "AI system collecting and analyzing personal data for service personalization and improvement.",
        considerations: [
            {
                topic: "Data Collection",
                points: [
                    "Types of data",
                    "Storage security",
                    "Usage limitations",
                    "User consent"
                ]
            },
            {
                topic: "Privacy Protection",
                points: [
                    "Data rights",
                    "Information control",
                    "Security measures",
                    "Transparency"
                ]
            },
            {
                topic: "Ethical Balance",
                points: [
                    "Service quality",
                    "Privacy rights",
                    "Data necessity",
                    "User control"
                ]
            }
        ],
        scoutLawConnections: [
            "Trustworthy: Protecting information",
            "Loyal: Respecting privacy",
            "Courteous: Respecting boundaries"
        ],
        discussionQuestions: [
            "What data should be collected?",
            "How should it be protected?",
            "What control should users have?",
            "How can transparency be maintained?"
        ]
    }
];

Fudgel.component(
    "what-would-you-do",
    {
        style: `
            :host {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                height: 14em;
                width: 100%;
                background-color: tan;
                color: black;
            }

            .title {
                margin: 0.5em 0;
            }

            .description {
                font-size: 0.8em;
            }

            .section-title {
                font-size: 0.8em;
            }

            .section-points {
                font-size: 0.6em;
            }
        `,
        template: `
        <button @click="start()">Pick a Random Scenario</button>
        <div *if="scenario" class="title">{{ scenario?.title }}</div>
        <div *if="scenario" class="description">{{ scenario?.description }}</div>
        <div *if="scenario">
            <button @click="setStage('1')">{{ scenario?.considerations[0]?.topic }}</button>
            <button @click="setStage('2')">{{ scenario?.considerations[1]?.topic }}</button>
            <button @click="setStage('3')">{{ scenario?.considerations[2]?.topic }}</button>
            <button @click="setStage('scoutLaw')">Scout Law</button>
            <button @click="setStage('discussion')">Discussion</button>
        </div>
        <div *if="stage === '1'">
            <p class="section-title">{{ scenario?.considerations[0]?.topic }}</p>
            <ul class="section-points">
                <li *for="point of scenario?.considerations[0]?.points">{{ point }}</li>
            </ul>
        </div>
        <div *if="stage === '2'">
            <p class="section-title">{{ scenario?.considerations[1]?.topic }}</p>
            <ul class="section-points">
                <li *for="point of scenario?.considerations[1]?.points">{{ point }}</li>
            </ul>
        </div>
        <div *if="stage === '3'">
            <p class="section-title">{{ scenario?.considerations[2]?.topic }}</p>
            <ul class="section-points">
                <li *for="point of scenario?.considerations[2]?.points">{{ point }}</li>
            </ul>
        </div>
        <div *if="stage === 'scoutLaw'">
            <p class="section-title">Scout Law Connections</p>
            <ul class="section-points">
                <li *for="connection of scenario?.scoutLawConnections">{{ connection }}</li>
            </ul>
        </div>
        <div *if="stage === 'discussion'">
            <p class="section-title">Discussion Questions</p>
            <ul class="section-points">
                <li *for="question of scenario?.discussionQuestions">{{ question }}</li>
            </ul>
        </div>
    `
    },
    class {
        scenarios = scenarios2;
        scenario;

        start() {
            this.stage = null;
            this.scenario = this.scenarios[Math.floor(Math.random() * this.scenarios.length)];
            this.scenarios = this.scenarios.filter(s => s !== this.scenario);

            if (this.scenarios.length === 0) {
                this.scenarios = scenarios2;
            }
        }

        setStage(stage) {
            this.stage = stage;
        }
    }
);
