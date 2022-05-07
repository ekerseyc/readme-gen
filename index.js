// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');


// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'What is the title of your project?',
    name: 'title',
    validate: function (answer) {
        if (answer.length === 0) {
              return console.log("Please enter a valid project title.")
        };
        return true;
    }
  },
  {
    type: 'input',
    message: 'Please write a description for your project.',
    name: 'description',
    validate: function (answer) {
      if (answer.length === 0) {
            return console.log("Please enter a valid description.")
      };
      return true;
    }
  },
    {
      type: 'list',
      name: 'license',
      message: 'Please choose a license',
      choices: [
        'MIT',
        'Apache-2.0',
        'MPL-2.0',
        'ISC',
        'GPL-2.0'
      ]
    },
    {
      type: 'input',
      message: 'Please write how to install the app.',
      name: 'installation',
      validate: function (answer) {
        if (answer.length === 0) {
              return console.log("Please enter a valid description.")
        };
        return true;
      }
    },
    {
      type: 'input',
    message: 'Please write a how someone can contribute to your project.',
    name: 'contribution',
    validate: function (answer) {
      if (answer.length === 0) {
            return console.log("Please enter a valid description.")
      };
      return true;
    }
    },
    {
      type: 'input',
      message: 'Please write how to test the app.',
      name: 'test',
      validate: function (answer) {
        if (answer.length === 0) {
              return console.log("Please enter a valid description.")
        };
        return true;
      }
    },
    {
      type: 'input',
      message: 'Enter github username.',
      name: 'github',
      validate: function (answer) {
        if (answer.length === 0) {
              return console.log("Please enter a valid username.")
        };
        return true;
      }
    },
    {
      type: 'input',
      message: 'Enter your email.',
      name: 'email',
      validate: function (answer) {
        if (answer.length === 0) {
              return console.log("Please enter a valid description.")
        };
        return true;
      }
    }
  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateMarkdown(data), 
  (err) => { err ? console.error(err) 
    : console.log("README created!")});
}

// TODO: Create a function to initialize app
function init() {
  return inquirer
    .prompt(questions)

    .then((answers) => {
      writeToFile('./dist/README.md', answers), (err) => {
          err ? console.error(err) : console.log('success')
        }
      });
}

// Function call to initialize app
init();
