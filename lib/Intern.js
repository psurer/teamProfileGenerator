const Employee = require('./employee');
module.exports = class Intern extends Employee{
    constructor(id, name, email, phone, employeeType,managerName){
        super(id, name, email, phone,employeeType,managerName);
    }
}