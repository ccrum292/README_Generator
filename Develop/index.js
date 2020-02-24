var inquirer = require("inquirer");
var fs = require("fs");
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
        type: "input",
        name: "license",
        message: "What kind of license should your project have?",
    },
    {
        type: "input",
        name: "installDepencies",
        message: "What command should be run to install dependencies?",
    },
    {
        type: "input",
        name: "tests",
        message: "What command should be run to run tests?",
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
]).then(function(data) {

    var filename = data.projectName.toLowerCase().split(' ').join('') + ".md";
  
    fs.writeFile(filename, generateMarkdown(data), function(err) {
  
      if (err) {
        return console.log(err);
      }
  
      console.log("Success!");
  
    });
  });








// const questions = [

// ];

// function writeToFile(fileName, data) {
// }

// function init() {

// }

// init();
