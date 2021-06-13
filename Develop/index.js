// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// const generatePage = require('./src/page-template');
// const { writeFile, copyFile } = require('./utils/generate-site');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is the project title? (Required)',
        validate: titleInput => {
          if (titleInput) {
            return true;
          } else {
            console.log('You need to enter a project title!');
            return false;
          }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project (Required)',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('You need to enter a project description!');
                return false;
            }   
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide installation instructions for the project (Required)',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('You need to provide installation instructions!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide usage information (Required)',
        validate: descriptionInput => {
            if (descriptionInput) {
            return true;
            } else {
            console.log('You need to provide usage information!');
            return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Provide contribution guidelines (Required)',
        validate: contributorInput => {
            if (contributorInput) {
            return true;
            } else {
            console.log('You need to provide contribution guidelines');
            return false;
            }
        }
    },
    {
        type: 'input',
        name: 'test',
        message: 'Provide any test instructions (Required)',
        validate: testInput => {
            if (testInput) {
            return true;
            } else {
            console.log('You need to provide test instructions');
            return false;
            }
        }
    },
    {
        type: 'checkbox',
        name: 'languages',
        message: 'What lanuages did you use for this project? (Check all that apply)',
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username (Required)',
        validate: githubInput => {
            if (githubInput) {
            return true;
            } else {
            console.log('Please enter your GitHub username!');
            return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email (Required)',
        validate: emailInput => {
            if (emailInput) {
            return true;
            } else {
            console.log('Please enter your email!');
            return false;
            }
        }
    }]);
};

questions();

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
