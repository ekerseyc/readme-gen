const inquirer = require('inquirer');
const fs = require('fs');

const licenses = ['MIT', 'BSD', 'Apache'];

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your name?',
      name: 'name',
    },
    {
      type: 'input',
      message: 'What is your email?',
      name: 'email'
    },
    {
      type: 'list',
      message: 'What is your License Type?',
      name: 'license',
      choices: licenses,
    },
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'title',
      },
  ])
  .then((answers) => {
      fs.writeFile('log.json', JSON.stringify(answers, null, 2), (err) => {
      err ? console.error(err) : console.log('success')
      });
  });