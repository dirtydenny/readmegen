// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  var licenseBadge = `![License](https://img.shields.io/badge/License-${license}-blue.svg)`;
  return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

function renderLicenseSection(license) {
  if (license !== "None") {
    return `## License 
     For more info, please follow the link below.
  [link.](${renderLicenseLink(license)
    })`;
  }
}

function renderLicenseLink(license) {
  var licLink = ``;

  if (license === "MIT") {
    licLink = "https://opensource.org/license/MIT";
    return licLink;
  } else if (license === "Microsoft Public License") {
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  return `

# ${data.title}
${renderLicenseBadge(data.license)}


## Table of Contents  
[Description](#Description)\n  
[Installation](#Installation)\n  
[Usage](#Usage)\n  
[Questions](#Questions)\n  
[Tests](#tests)  
    

  ${renderLicenseSection(data.license)}

  ## Description

  ${data.description}

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Tests

  ${data.test}

  ## Questions

  Thank you for using my application.  Please submit questions to ${
    data.email
  }.  Also, visit me at 
    [${data.github}](https//github.com/${
    data.github
  }/) to see my other programs.

`;
}

module.exports = generateMarkdown;
