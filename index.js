// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input

// var licenseBadge = `![License](https://img.shields.io/badge/License-${license}-blue.svg)`;
// return ;

inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of your README?",
    },
    {
      type: "input",
      name: "installation",
      message: "What are your installation instructions?",
    },
    {
      type: "input",
      name: "license",
      message: "Please select a license.",
      choices: "MIT", "Microsoft Public License", "Mozilla Public License 2.0", "The Unlicense", "None",
    },
    {
      type: "input",
      name: "food",
      message: "What is your favorite food?",
    },
    {
      type: "input",
      name: "github",
      message: "Enter your GitHub Username",
    },
    {
      type: "input",
      name: "linkedin",
      message: "Enter your LinkedIn URL.",
    },
  ])
  .then((answers) => {
    const htmlPageContent = generateHTML(answers);

    fs.writeFile("README.md", htmlPageContent, (err) =>
      err ? console.log(err) : console.log("Successfully created README!")
    );
  });


// const questions = []; 

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

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
