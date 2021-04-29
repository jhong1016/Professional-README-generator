// TODO: Include packages needed for this application
// External packages
const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');
const writeFileAsync = util.promisify(writeToFile);

// Internal NPMs
const api = require('./utils/api.js');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
// Inquirer prompts for user reponses
const questions = [
    // GitHub Username
    {
        type: 'input',
        name: 'username',
        message: 'What is your Github username? (No "@" needed)',
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
        type: 'list',
        name: 'license',
        message: 'Choose a license for the project.',
        // https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/licensing-a-repository
        choices: [
            "None",
            "Apache2.0",
            "GNU Public v3.0",
            "MIT",
            "Boost Software 1.0",
            "Creative Commons Zero v1.0 Universal",
            "Eclipse Public 2.0",
            "GNU Affero General Public v3.0",
            "GNU General Public v2.0",
            "GNU Lesser General Public v2.1",
            "Mozilla Public 2.0",
            "The Unilicense",
        ]
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
          return console.log(err);
        }
        console.log("Success! Your README.md file has been generated.")
    });
}

// TODO: Create a function to initialise app
async function init() {
    try {
        // Write new README.md to dist directory
        // Prompt Inquirer questions
        const userResponses = await inquirer.prompt(questions);
        console.log("Your responses: ", userResponses);
        console.log("Your responses have been logged. Fetching your GitHub data...");
    
        // Call GitHub API for user info
        const userInfo = await api.getUser(userResponses);
        console.log("Your GitHub user info: ", userInfo);
    
        // Pass Inquirer userResponses and GitHub userInfo to generateMarkdown
        console.log("Generating your README...");
        const markdown = generateMarkdown(userResponses, userInfo);
        console.log(markdown);

        // Write markdown
        await writeFileAsync('ExampleREADME.md', markdown);
        console.log('✔️  Successfully wrote to README.md');

    } catch (error) {
        console.log(error);
    }
}

// Function call to initialize app
init();
