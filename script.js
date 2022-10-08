const inquirer = require("inquirer");
const fs = require("fs");

inquirer
    .prompt([
        {
            type: "input",
            message: "What is your project title?",
            name: "title",
        },
        {
            type: "input",
            message: "What is your project's description?",
            name: "description",
        },
        {
            type: "input",
            message: "What are your installation instructions?",
            name: "installation",
        },
        {
            type: "input",
            message: "What is your usage information?",
            name: "usage",
        },
        {
            type: "input",
            message: "What are your contribution guidelines?",
            name: "contributing",
        },
        {
            type: "input",
            message: "What are your test instructions?",
            name: "test",
        },
   
        {
            type: "list",
            message: "Choose a license from the following list:",
            choices: [
                "Apache",
                "GNU",
                "MIT",
                "BSD",
                "ISC",
                "EPL",
                "MPL",
                "GPL",
            ],
            name: "license",
        },
        {
            type: "input",
            message: "What is your Github username?",
            name: "github",
        },
        {
            type: "input",
            message: "What is your Github repository name?",
            name: "repository",
        },
        {
            type: "input",
            message: "What is your email address?",
            name: "email",
        }
    ])

    .then((answers) => {
        const readmePageContent = generateReadme(answers);

        fs.writeFile('Demo-README.md', readmePageContent, (err) =>
            err ? console.log(err) : console.log('Successfully created readme!')
        );
    });



const generateReadme = ({ title, description, installation, usage, contributing, test, license, github, repository, email }) =>
`
# ${title}
![badge](https://img.shields.io/badge/license-${license}-blue)
## Description
${description}
## Table of Contents
- [ Description ](#Description)
- [ Installation ](#Installation)
- [ Usage ](#Usage)
- [ Contributing ](#Contributing)
- [ Tests ](#Tests)
- [ License ](#License)
- [ Questions ](#Questions)
## Installation
${installation}
## Usage
${usage}
## Contributing
${contributing}
## Tests
${test}
## Repository
[Repository Link](https://github.com/${github}/${repository})
![badge](https://img.shields.io/github/commit-activity/m/${github}/${repository})
## License
The license of this application is covered under ${license}.
## Questions
Github username: ${github}
[Gihub Profile Link](https://github.com/${github})
If you have further questions, please email me with your inquiries at the address below.
Email Address: ${email}
`;