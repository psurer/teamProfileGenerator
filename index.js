// Includes packages needed for this app
// const { listenerCount } = require('events');
const fs = require('fs');
const inquirer = require('inquirer');
const employee = require('./lib/Employee.js');
const Engineer = require('./lib/Engineer.js');

// team manager’s name, employee ID, email address, and office number
// array of questions that require user input
const questions = [
    {
        type: "input",
        name: "managerName", // name of property in the obect questions
        message: "What is your team manager's name?" // question user will see
    },
    {
        type: "input",
        name: "id", 
        message: "Enter your employee ID."
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    },
    {
        type: "input",
        name: "officeNumber",
        message: "Enter your office number."
    }
];
// allows user to select team 
function createTeam() {
  inquirer.prompt([
    {
      type: "list",
      name: "teamRole",
      message: "Who would you like to add to your team?",
      choices: [
        "Engineer",
        "intern",
        "I do not wish to add any more to my team"
      ]
    }
  ]);
}
// TODO: Create a function to initialize app
function init() {
    //inquirer is a object, 
    inquirer.prompt(questions).then(function(data){
        fs.writeFile("index.html", generateHTML(data),function (err) {
            if (err) {
                console.log(err);
            }
        });
    })
}

function generateHTML(data) {
    var html = `<!DOCTYPE html>
<html>
    <head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-wEmeIV1mKuiNpC+IOBjI7aAzPcEZeedi5yW5f2yOq55WWLwNGmvvx4Um1vskeMj0" crossorigin="anonymous">
    </head>
<body>
<header>
<nav class="navbar navbar-dark bg-dark" aria-label="First navbar example">
<div class="container-fluid">
  <a class="navbar-brand" href="#">My Team</a>
  <div class="collapse navbar-collapse" id="navbarsExample01">
</div>
</nav>
    <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
    <div class="col">
      <div class="card mb-4 rounded-3 shadow-sm border-primary">
        <div class="card-header py-3 text-white bg-primary border-primary">
          <h4 class="my-0 fw-normal">${data.managerName}</h4>
        </div>
        <div class="card-body">
          <ul class="list-unstyled mt-3 mb-4">
            <li>${data.id}</li>
            <li><a href="mailto:${data.email}">${data.email}</a></li>      
            <li>${data.officeNumber}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`;
return html;
}

init();
