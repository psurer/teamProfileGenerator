// Includes packages needed for this app
const fs = require("fs");
const inquirer = require("inquirer");
const employee = require("./lib/Employee.js");
const Intern = require("./lib/Intern.js");
const engineer = require("./lib/engineer.js");
const questions = require("./lib/questions");
const Manager = require("./lib/manager.js");
const Engineer = require("./lib/engineer.js");

const htmlSections = [];
let currentManager = null;

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
        ${renderCards(data)}
    </div>
</body>
</html>`;
  return html;
}

function renderCards(cards) {
  let htmlCardSection = "";
  cards.map((item) => {
    htmlCardSection = htmlCardSection + item;
  });
  return htmlCardSection;
}
function generateCard(data) {
  let bgColor = (data.employeeType === 'manager')? "bg-secondary border-secondary": "bg-primary border-primary";
  let cardBorderColor = (data.employeeType === 'manager')? "border-secondary": "border-primary";
  let htmlForCards = "";
  let htmlForCardsTempleStart = `<div class="col">
        <div class="card mb-4 rounded-3 shadow-sm ${cardBorderColor}">
            <div class="card-header py-3 text-white ${bgColor}">
            <h4 class="my-0 fw-normal">${data.name}</h4>
            </div>`;
  let htmlForCardsTemplateEnd = "</div></div>";
  htmlForCards =
    htmlForCardsTempleStart + createCard(data) + htmlForCardsTemplateEnd;

  return htmlForCards;
}

function createCard(data) {
  let htmlCard = `
    <div class="card-body">
      <ul class="list-unstyled mt-3 mb-4">
        <li>Manager: ${(data.managerName) ? data.managerName: ''}</li>
        <li>Id: ${data.id}</li>
        <li>
          <a href="mailto:${data.email}">${data.email}</a>
        </li>
        <li>Office: ${data.phone}</li>
      </ul>
    </div>`;
  return htmlCard;
}

function init() {
  createTeam();
}

function createTeam() {
  inquirer.prompt(questions.roleQuestions).then((answer) => {
    if (answer.teamRole.toLowerCase() === "engineer") {
      addEngineer();
    }
    if (answer.teamRole.toLowerCase() === "intern") {
      addIntern();
    }
    if (answer.teamRole.toLowerCase() === "manager") {
        addManager();
      }
    if (answer.teamRole.toLowerCase() === "i do not wish to add any more to my team") {
      saveToFile(generateHTML(htmlSections));
    }
  });
}

function addManager() {
    inquirer.prompt(questions.generalQuestions).then((answer) => {
      let manager = new Manager(
        answer.id,
        answer.name,
        answer.email,
        answer.phone,
        'manager'
      );
      htmlSections.push(generateCard(manager));
      currentManager = manager;
      createTeam();
    });
  }

function addEngineer() {
  inquirer.prompt(questions.generalQuestions).then((answer) => {
    let engineer = new Engineer(
      answer.id,
      answer.name,
      answer.email,
      answer.phone,
      'engineer',
      (currentManager)? currentManager.name: ''
    );
    htmlSections.push(generateCard(engineer));
    createTeam();
  });
}

function addIntern() {
  inquirer.prompt(questions.generalQuestions).then((answer) => {
    console.log(answer);
    let intern = new Intern(answer.id, answer.name, answer.email, answer.phone, 'intern', (currentManager)? currentManager.name: '');
    console.log(intern);
    htmlSections.push(generateCard(intern));
    createTeam();
  });
}

function saveToFile(data){
    fs.writeFile('./index.html', data, (err)=> console.log(err));
}
init();












