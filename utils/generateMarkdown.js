// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == "none") {
    return "";
  }
  return `[${license} Badge](http://img.shields.io/badge/License-${license}-blue)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == "none") {
    return "";
  }
  return `http://opensource.org/licenses/{$license}`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == "none") {
    return "";
  }
  return `## License
  
  This application is covered under the ${license} license. You can read more about it here: [${license}](${renderLicenseLink})`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description

${renderLicenseBadge(data.license)}

${data.description}

##Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contribution](#contribution)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## License

${renderLicenseSection(data.license)}

## Contribution

${data.contribution}

## Tests

${data.tests}

## Questions

If you have any questions, please contact me at ${data.github} on github or by email: ${data.email}. Thanks!
`;
}

module.exports = generateMarkdown;
