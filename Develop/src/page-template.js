module.exports = templateData => {
    const { license, title, description, installation, usage, contribution, test, github, ...email} = templateData;

    const generateBadges = license => {
        apache = "";
        mit = "";
        mozilla = "";
        if (license.includes("Apache")) {
            apache = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
        }
        if (license.includes("MIT")) {
            mit = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
        }
        if (license.includes("Mozilla")) {
            mozilla =`[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
        }
        return apache + " " + mit + " " + mozilla
    };
  
return `

## Badges
${generateBadges(license)}

# ${title}

## Description 
${description}

## Table of Contents (Optional)

* [Installation](#installation)
* [Usage](#usage)
* [Contribution](#contribution)
* [Test](#test)

## Installation
${installation}

## Usage 
${usage}

## Contributing
${contribution}
    
## Tests
${test}

## Questions
Github username: ${github}
Email: ${email}
    `;
};
