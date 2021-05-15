const generalQuestions = [
    {
      type: "input",
      name: "id",
      message: "Enter your employee ID.",
      validate: answer => {
          if (answer !== "") {
            return true;
          }
          return "Please enter at least one character.";
        }
    },
    {
      type: "input",
      name: "name",
      message: "Enter your name.",
      validate: answer => {
          if (answer !== "") {
            return true;
          }
          return "Please enter a valid name.";
        }
    },
    {
      type: "input",
      name: "email",
      message: "What is your email address?",
      validate: answer => {
          if (answer !== "") {
            return true;
          }
          return "Please enter a valid email address.";
        }
    },
    {
      type: "input",
      name: "phone",
      message: "Enter your office number number.",
      validate: answer => {
          if (answer !== "") {
            return true;
          }
          return "Please enter a phone number.";
        }
    },
  ];
  
  // team manager’s name, employee ID, email address, and office number
  // array of questions that require user input
  const managerQuestions = [
    {
      type: "input",
      name: "managerName", // name of property in the obect questions
      message: "What is your team manager's name?", // question user will see
    },
  ];
  
  const roleQuestions =   [{
      type: "list",
      name: "teamRole",
      message: "Who would you like to add to your team?",
      choices: ["Manager", "Engineer", "Intern", "I do not wish to add any more to my team"],
    }];
  
  module.exports = {
    generalQuestions: generalQuestions,
    managerQuestions: {managerQuestions, ...generalQuestions, teanmRole: 'Manager'},
    roleQuestions : roleQuestions
  };
  