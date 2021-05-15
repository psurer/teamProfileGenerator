// const Employee = require('./Employee'); 

// class Intern extends Employee {
//     constuctor(name, id, email, school) {
//         super(name, id, email);
//         this.school = school;
//     }
//     getRole() {
//         return "Intern";
//     }
//     getSchool() {
//         return this.school;
//     }

// }

// module.exports = Intern;

const Employee = require('./employee');
module.exports = class Intern extends Employee{
    constructor(id, name, email, phone, employeeType,managerName ){
        super(id, name, email, phone,employeeType,managerName);
    }
}