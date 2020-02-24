function generateMarkdown(data) {
  // console.log(data.projectName)
  return `
# ${data.projectName} \n 
## Description \n ${data.description} \n
## Table of Contents \n some text \n
## Installation \n To install the necessary dependencies, run the following command \n ${data.installDepencies} \n
## Usage \n ${data.knowAboutRepo} \n
## License \n This project is licensed under the ${data.license} license. \n
## Contributing \n ${data.contributing} \n
## Tests \n To run tests, run the following command \n ${data.tests} \n
## Questions \n If you have any questions pertaining this repository, please open an issue or contact ${data.gitHubUsername} directly at ${data.emailAddress}. \n
`;
}

module.exports = generateMarkdown;
