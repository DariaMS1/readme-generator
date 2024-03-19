const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
    },
    {
        type: "input",
        name: "title",
        message: "What's the title of your project?",
    },
    {
        type: "input",
        name: "description",
        message: "Please write a description of your project --->",
    },
    {
        type: "list",
        name: "license",
        message: "What kind of license should your project have?",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
    },
    {
        type: "input",
        name: "dependencies",
        message: "What command should be run to install dependencies?",
        default: "(npm i)"
    },
    {
        type: "input",
        name: "tests",
        message: "What command should be run to run tests?",
        default: "(npm test)"
    },
    {
        type: "input",
        name: "usage",
        message: "What does the user need to know to use this repo?",
    },
    {
        type: "input",
        name: "contribute",
        message: "What does the user need to know to contribute to this repo?",
    },
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
}

// function to initialize program
function init() {
    inquirer
    .prompt(questions).then((answers) => {
    console.log("Super high-level hacking in progress, stealing your data and compiling the file...]32']e'/]][]]#'HACEKD']]-0=90897e./>?")
    writeToFile('./starter/README.md', generateMarkdown({ ...answers }));
    })
    .catch((error) => {
        if (error.isTtyError) {
            console.error("Prompt couldn't be rendered in the current environment.");
        } else {
            console.error("An unexpected error occurred:", error);
        }
    });   
}

// function call to initialize program
init();
