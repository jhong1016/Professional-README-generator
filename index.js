// External packages
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');

// Internal NPM
const generateMarkdown = require('./utils/generateMarkdown.js');

// Inquirer prompts for user reponses
function init() {
    // Inquirer prompted questions for user
    inquirer.prompt([
    // GitHub Username
    {
        type: 'input',
        name: 'username',
        message: 'What is your Github username?',
        // We need to validate that user entered at least one word
        // https://stackoverflow.com/questions/57321266/how-to-test-inquirer-validation
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("You must enter a valid GitHub username.");
            }
            return true;
        }
    },
    // GitHub Repository
    {
        type: 'input',
        name: 'repository',
        message: 'Enter the name of your repository on GitHub.',
        // We need to validate that user entered at least one word
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("You must enter a valid GitHub repository.");
            }
            return true;
        } 
    },
    // Email Address
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("You must enter a valid email address.");
            }
            return true;
        }
    },
    // Title of Project
    {
        type: 'input',
        name: 'title',
        message: 'What is the project title?',
        // We need to validate that user entered at least one word
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("You must enter the title of your project.");
            }
            return true;
        }   
    },
    // Project Description
    {
        type: 'input',
        name: 'description',
        message: 'What is the project description?',
        // We need to validate that user entered at least one word
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("You must enter a description for your project.");
            }
            return true;
        }
    },
    // Installation Instructions
    {
        type: 'input',
        name: 'installation',
        message: 'Describe the steps required to insall the project for the Installation section (if applicable).',
        // Validation not required if question is optional
    },
    // Usage Information
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples of the project in use for the Usage Section.',
    },
    // Contribution Guidelines
    {
        type: 'input',
        name: 'contributing',
        message: 'Explain how users can contribute to your project (if applicable).',
        // Validation not required if question is optional
    },
    // Test Instructions
    {
        type: 'input',
        name: 'tests',
        message: 'Provide any tests written for the project, and explain how to test (if applicable).',
        // Validation not required if question is optional
    },
    // License
    {
        type: 'checkbox',
        name: 'license',
        message: 'Choose a license for the project.',
        choices: [
            'Apache2.0',
            'GNU Public v3.0',
            'MIT',
            'Boost Software 1.0',
            'Mozilla Public 2.0',
        ]
    }
    // Where the user input is stored (data)
    ]).then(function(data) {
        // message for the user
        console.log("Generating your README...");
        // calling function writeToFile(fileName, data) using "README.md" and generateMarkdown(data) parameters & uses a spread opperater to spread data. 
        writeToFile("ExampleREADME.md", generateMarkdown({...data}));  
  });
} 

// Function to write README file takes in fileName and user data parameters
function writeToFile(fileName, data) {
    fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// Function call to initialize app
init();
