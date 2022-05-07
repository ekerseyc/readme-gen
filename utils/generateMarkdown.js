// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == "none") {
    return "";
  }
  return `![${license} Badge](https://img.shields.io/badge/License-${license}-blue)`;
}

// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == "none") {
    return "";
  }
  return `http://opensource.org/licenses/{$license}`;
}

// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == "none") {
    return "";
  }
  return `## License
  
  This application is covered under the ${license} license. You can read more about it here: [${license}](${renderLicenseLink(license)})`;
}

// generate function
function generateMarkdown(data) {
  return `# ${data.title}

## Description

${renderLicenseBadge(data.license)}

${data.description}

## Table of Contents

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

${renderLicenseSection(data.license)}

## Contribution

${data.contribution}

## Tests

${data.test}

## Questions

If you have any questions, please contact me at ${data.github} on github or by email: ${data.email}. Thanks!
`;
}

module.exports = generateMarkdown;
