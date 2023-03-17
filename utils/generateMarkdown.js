// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  var licenseBadge = `![License](https://img.shields.io/badge/License-${license}-blue.svg)`;
  return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return "# License";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

## Table of Contents  

    * [Description](#description)  
    ${renderLicenseLink(data.license)}  
    * [Installation](#installation)  
    * [Usage](#usage)  
    * [Questions](#questions)  
    * [Tests](#tests)  
    * [Updating to New Releases](#updating-to-new-releases)




  ${renderLicenseSection(data.license)}

  ## Description

  ${data.descripton}

  ## Installation

  ${data.installation}

  

`;
}

module.exports = generateMarkdown;