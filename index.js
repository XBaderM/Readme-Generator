//packages needed for the readme generator
const inquirer = require('inquirer');
const fs = require('fs');
const generator = require('./utils/generateMarkdown.js');

// question array list
const questions = [{
  type: 'input',
  name: 'title',
  message: 'Please enter your project title? (Required)',
  validate: title => {
      if (title) {
          return true;
      } else {
          console.log('Please enter your project title!');
          return false;
      }
  }
},
{
  type: 'input',
  name: 'description',
  message: 'enter description of the project. (Required)',
  validate: description => {
      if (description) {
          return true;
      } else {
          console.log('Please enter a description!');
          return false;
      }
  }
},
{
  type: 'input',
  name: 'installation',
  message: 'installation instrucitons for your project?'
},
{
  type: 'input',
  name: 'usage',
  message: 'usage information for your project?'
},
{
  type: 'list',
  name: 'license',
  message: 'please choose a license for your project?',
  choices: ['Apache','MIT' , 'BSD', 'ISC']
},
{
  type: 'input',
  name: 'contribution',
  message: 'How can others contribute to your project?'
},
{
  type: 'input',
  name: 'tests',
  message: 'testing instructions?'
},
{
  type: 'input',
  name: 'username',
  message: 'Please enter your GitHub username? (Required)',
  validate: username => {
      if (username) {
          return true;
      } else {
          console.log('Please enter GitHub a username!');
          return false;
      }
  }
},
{
  type: 'input',
  name: 'email',
  message: 'Please Enter your email address. (Required)',
  validate: email => {
      if (email) {
          return true;
      } else {
          console.log('Please enter your email address!');
          return false;
      }
  }
}
];

// function to create README file
function writeToFile(data) {
  fs.writeFile('./readme-output/README.md', data, err => {
      if (err) throw err;

      console.log('README file created');
  });
};

// initilization 
function init() {
  inquirer.prompt(questions)
  .then(generator)
  .then(writeToFile)
};

init();
