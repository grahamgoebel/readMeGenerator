var inquirer = require('inquirer');
inquirer
  .prompt([ {
    type: "input",
    name: "username",
    message: "What is your github username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Please write a brief description of your project.",
  },
  {
    type: "list",
    name: "license",
    message: "What license should your project have?",
    choices: ["MIT", "GPL", "Apache"],
  },
  {
    type: "input",
    name: "command",
    message: "What command should be run to install dependencies?",
    default: "npm install inquirer",
  },
  {    
    type: "input",
    name: "test",
    message: "What command should be run to run tests?",
    default: "npm test",
  },
  {
    type: "input",
    name: "why",
    message: "Why did you create this project?",
  },
  {
    type: "input",
    name: "problem",
    message: "What problem does your project solve?",
  },
  {
    type: "input",
    name: "access",
    message: "What does the user need to know about accessing the repository?",
  },
  ])
  .then(answers => {
    // Use user feedback for... whatever!!
  })
  .catch(error => {
    if(error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else when wrong
    }
  });

