// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "fileName",
    message: "What is the File Name of your README?",
  },
  {
    type: "input",
    name: "title",
    message: "What is the title of your README?",
  },
  {
    type: "input",
    name: "description",
    message: "Please describe the project for the README.",
  },
  {
    type: "list",
    name: "license",
    message: "Please select a license.",
    choices: [
      "MIT",
      "Microsoft Public License",
      "Mozilla Public License 2.0",
      "The Unlicense",
      "None",
    ],
  },
  {
    type: "input",
    name: "installation",
    message: "What are your installation instructions?",
    default: "npm i",
  },
  {
    type: "input",
    name: "usage",
    message: "Please provide the user with usage information.",
  },
  {
    type: "input",
    name: "test",
    message: "Test Command?",
    default: "npm test",
  },
  {
    type: "input",
    name: "github",
    message: "Enter your GitHub Username",
  },
  {
    type: "input",
    name: "email",
    message: "Enter your Email address.",
  },
  {
    type: "input",
    name: "contributing",
    message: "How can one contribute to the repo?",
  },
];




  // .then((answers) => {
  //   const readmePageContent = generateMarkdown(answers);
  
    // fs.writeFile("README.md", readmePageContent, (err) =>
    //   err ? console.log(err) : console.log("Successfully created README!")
    // );



//  

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile("${fileName}.md", data, (err) =>
  err ? console.log(err) : console.log("Successfully created README!")
);}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((data) => {
        var markdownTemplate = generateMarkdown(data);
    })
}

// Function call to initialize app
init();
