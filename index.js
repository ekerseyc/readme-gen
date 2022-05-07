// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');



inquirer
  .prompt([
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
      message: 'What is your prefered method of communication?',
      name: 'communication',
      choices: [
        {name: 'in person', value: 'inPerson'},
        {name: 'telephone', value: 'phone'},
        {name: 'E-mail', value: 'email'},
    ]
    },
  ])
  .then((answers) => {
      fs.writeFile('log.json', JSON.stringify(answers, null, 2), (err) => {
      err ? console.error(err) : console.log('success')
      });
  });
// TODO: Create an array of questions for user input
const questions = [

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
