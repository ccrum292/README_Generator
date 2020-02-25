// const axios = require("axios")

function generateMarkdown(data) {
  function badge (){
    if (data.license === "MIT"){
      return '[![MIT Badge](https://img.shields.io/badge/license-MIT-green)](https://opensource.org/licenses/MIT)'
    }
    else if(data.license === "Apache"){
      return'[![Apaache Badge](https://img.shields.io/badge/license-Apache-green)](https://www.apache.org/licenses/LICENSE-2.0)'
    }
    else if(data.license === "GPL"){
      return'[![GPL Badge](https://img.shields.io/badge/license-GPL-green)](https://www.gnu.org/licenses/gpl-3.0.en.html)'
    }
  }
  return `
# ${data.projectName} \n
 ${badge()} \n
## Description \n ${data.description} \n
## Table of Contents \n * [Installation](#installation) \n * [Usage](#usage) \n * [License](#license) \n * [Contributing](#contributing) \n * [Tests](#tests) \n * [Questions](#questions) \n
## Installation \n To install the necessary dependencies, run the following command, \n ${data.installDepencies} \n
## Usage \n ${data.knowAboutRepo} \n
## License \n This project is licensed under the ${data.license} license. \n
## Contributing \n ${data.contributing} \n
## Tests \n To run tests, run the following command \n ${data.tests} \n
## Questions \n <img src="${data.avatar_url}" alt="profile picture" width="20px" />) \n If you have any questions pertaining this repository, please open an issue or contact ${data.login} directly at ${data.emailAddress}. \n
`;
}

module.exports = generateMarkdown;