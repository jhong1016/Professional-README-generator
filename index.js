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
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
