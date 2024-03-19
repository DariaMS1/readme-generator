// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description

  ## Table of Contents (Optional)

  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)

  ## Installation

  ## Usage

  ![alt text](assets/images/screenshot.png)

  ## Credits

  ## License

  ## Badges

  ## Features

  ## How to Contribute

  ## Tests

  ## Questions

`;
}

module.exports = generateMarkdown;
