var inquirer = require("inquirer");
var fs = require("fs");
const axios = require("axios");
var generateMarkdown = require("./utils/generateMarkdown.js")
var api = require("./utils/api.js")

inquirer.prompt([
    {
        type: "input",
        name: "gitHubUsername",
        message: "What is your GitHub username?",
    },
    {
        type: "input",
        name: "emailAddress",
        message: "What is your email address?",
    },
    {
        type: "input",
        name: "projectName",
        message: "What is your project's name?",
    },
    {
        type: "input",
        name: "description",
        message: "Please write a short description of your project?",
    },
    {
        type: "list",
        name: "license",
        message: "What kind of license should your project have?",
        choices: [
            "MIT",
            "Apache",
            "GPL",
        ]
    },
    {
        type: "input",
        name: "installDepencies",
        message: "What command should be run to install dependencies?",
        default: "npm i"
    },
    {
        type: "input",
        name: "tests",
        message: "What command should be run to run tests?",
        default: "npm test"
    },
    {
        type: "input",
        name: "knowAboutRepo",
        message: "What does the user need to know about the repo?",
    },
    {
        type: "input",
        name: "contributing",
        message: "What does the user need to know about contributing to the repo?",
    }
]).then(function(results) {
    
    api.getUser(results.gitHubUsername).then(({ data }) => {
      
        var filename = results.projectName.toLowerCase().split(' ').join('') + ".md";
  
        fs.writeFile(filename, generateMarkdown({...data, ...results}), function(err) {
      
          if (err) {
            return console.log(err);
          }

    })
    });
  });








// const questions = [

// ];

// function writeToFile(fileName, data) {
// }

// function init() {

// }

// init();
