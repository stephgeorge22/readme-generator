module.exports = templateData => {
    // console.log(templateData);
    const { projects, about, ...header } = templateData;
  
    return `

    ## Badges
    ${header.languages}

    # ${header.title}

    ## Description 
    ${body.description}

    ## Table of Contents (Optional)
    
    * [Installation](#installation)
    * [Usage](#usage)
    * [Contribution](#contribution)
    * [Test](#test)
    
    ## Installation
    ${body.installation}

    ## Usage 
    ${body.usage}
    
    ## Contributing
    ${body.contribution}
        
    ## Tests
    ${body.test}

    ## Questions
    ${footer.github}
    ${footer.email}
    `;
};