// TODO: Include packages needed for this application
// External packages
const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');

// Internal NPMs
const api = require('./utils/api.js');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
// Inquirer prompts for user reponses
const questions = [
    // Title of Project
    {
        type: 'input',
        name: 'title',
        message: 'What is the project title?',
        default: 'Project Title',
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
        default: 'Project Description',
        // We need to validate that user entered at least one word
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("You must enter a description for your project.");
            }
            return true;
        }
    },
    // Table of Contents
    {
        type: 'checkbox',
        name: 'table',
        message: 'What are the contents?',
        choices: ['Installation', 'Usage', 'License', 'Contributing', 'Tests', 'Questions']
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
        type: 'list',
        name: 'license',
        message: 'Choose a license for the project.',
        // https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/licensing-a-repository
        choices: ['afl-3.0', 'apache-2.0', 'artistic-2.0', 'bsl-1.0', 'bsd-2-clause', 'bsd-3-clause', 'bsd-3-clause-clear', 'cc', 'cc0-1.0', 'cc-by-4.0', 'cc-by-sa-4.0', 'wtfpl', 'ecl-2.0', 'epl-1.0', 'epl-2.0', 'eupl-1.1', 'agpl-3.0', 'gpl', 'gpl-2.0', 'gpl-3.0', 'lgpl', 'lgpl-2.1', 'lgpl-3.0', 'isc', 'lppl-1.3c', 'ms-pl', 'mit', 'mpl-2.0', 'osl-3.0', 'postgresql', 'ofl-1.1', 'ncsa', 'unlicense', 'zlib']
    },
    // GitHub Username
    {
        type: 'input',
        name: 'username',
        message: 'What is your Github username? (No "@" needed)',
        default: 'jinhong-dev',
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
        default: 'README-generator',
        // We need to validate that user entered at least one word
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("You must enter a valid GitHub repository.");
            }
            return true;
        } 
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
