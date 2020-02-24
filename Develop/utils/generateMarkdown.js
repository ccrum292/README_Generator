function generateMarkdown(data) {
  function badge (){
    if (data.license === "MIT"){
      return '[!["MIT Badge"]("https://img.shields.io/badge/license-MIT-green")]("https://opensource.org/licenses/MIT")'
    }
  }
  // [![]()](https://opensource.org/licenses/MIT)
  
  return `
# ${data.projectName} \n
 ${badge()} \n
## Description \n ${data.description} \n
## Table of Contents \n * [Installation](#installation) \n * [Usage](#usage) \n * [License](#license) \n * [Contributing](#contributing) \n * [Tests](#tests) \n * [Questions](#questions) \n
## Installation \n To install the necessary dependencies, run the following command \n ${data.installDepencies} \n
## Usage \n ${data.knowAboutRepo} \n
## License \n This project is licensed under the ${data.license} license. \n
## Contributing \n ${data.contributing} \n
## Tests \n To run tests, run the following command \n ${data.tests} \n
## Questions \n If you have any questions pertaining this repository, please open an issue or contact ${data.gitHubUsername} directly at ${data.emailAddress}. \n
`;
}

module.exports = generateMarkdown;
