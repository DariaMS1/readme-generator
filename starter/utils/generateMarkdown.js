// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description

  ${data.description}

  ## Table of Contents (Optional)

  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)

  ## Installation

  This project uses ${data.dependencies}.

  ## Usage

  The user needs to know: ${data.usage}.

  ## Credits

  ${data.github}

  ## License

  This project is licensed under the ${data.license}.

  ## How to Contribute

  If you wish to contribute to the project, the following applies: ${data.contribute}.

  ## Tests

  To run tests, use: ${data.tests}.

  ## Questions

  To visit the specific repo or see more work, find me at ${data.github}, or simply email me at ${data.email} to get in touch.
`;
}

module.exports = generateMarkdown;
