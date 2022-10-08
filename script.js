// TODO: Include packages needed for this application
//The node modules of inquirer and file system are used in this application.
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
//Inquirer prompts the user to input the following inpu fields.
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
        //Instead of input, this one is a list that the user selects with down arrow keys and pressing enter.
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
    //Then the answers are essentially passed as a parameter and then the object is deconstructed in the generate readme function.
    .then((answers) => {
        const readmePageContent = generateReadme(answers);

        //Creates/writes a new file called demo-readme and console logs that it was a success.
        fs.writeFile('Demo-README.md', readmePageContent, (err) =>
            err ? console.log(err) : console.log('Successfully created readme!')
        );
    });


// TODO: Create a function to write README file
//This function deconstructs the object's keys above and writes them into the gnerated readme file.
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