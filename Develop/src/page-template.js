module.exports = templateData => {
    // console.log(templateData);
    const { title, description, installation, ...header } = templateData;
  
    return `

    ## Badges
    ${header.languages}

    # ${header.title}

    ## Description 
    ${header.description}

    ## Table of Contents (Optional)
    
    * [Installation](#installation)
    * [Usage](#usage)
    * [Contribution](#contribution)
    * [Test](#test)
    
    ## Installation
    ${header.installation}

    ## Usage 
    ${header.usage}
    
    ## Contributing
    ${header.contribution}
        
    ## Tests
    ${header.test}

    ## Questions
    ${header.github}
    ${header.email}
    `;
};
