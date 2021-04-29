// Function to generate markdown for README
function generateMarkdown(data) {
  // returns inquirer prompted data. Writing in markdown inside backticks and using data to personalize markdown page.
  return `# ${data.title}
----

<a href="https://img.shields.io/badge/License-${data.license[0]}-brightgreen"><img src="https://img.shields.io/badge/License-${data.license[0]}-brightgreen"></a>

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Test Instructions](#test-instructions)
- [Questions](#questions?)
- [Questions?]()

### Description
${data.description}

### Installation
*Steps required to install project and how to get the development environment running:*

${data.installation}

### Usage
*Instructions and examples for use:*

${data.usage}

### Contribution
*If you would like to contribute, you can follow these guidelines for how to do so.*

${data.contribution}

### Test-Instructions
*Tests for application and how to run them:*

${data.tests}

### Questions?
*For any questions, please contact me with the information below:*

[Github Profile](https://github.com/${data.username})
[Email]${data.email}

---
    
`;
}

// Function exporting generateMarkdown function
module.exports = generateMarkdown;