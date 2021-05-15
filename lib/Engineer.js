// const Employee = require('./Employee');

// class Engineer extends Employee {
//     constructor(name, id, email, github) {
//       super(name, id, email);
//       this.github = github;
//     }
//     getRole() {
//       return "Engineer";
//     }
//     getGithub() {
//       return this.github;
//     }
//   }
//   module.exports = Engineer;

  const Employee = require('./employee');
  module.exports = class Engineer extends Employee{
      constructor(id, name, email, phone,employeeType,managerName){
          super(id, name, email, phone,employeeType,managerName);
      }
  }