// class Employee {
//     constructor(name, id, email){
//         this.name = name;
//         this.id = id;
//         this.email = email;
//     }
//     getName() {
//         return this.name;
//     }
//     getId() {
//         return this.id;
//     }
//     getEmail() {
//         return this.email;
//     }
//     getRole() {
//         return 'Employee';
//     }
// }

// module.exports = Employee;

module.exports = class Employee {
    constructor( id, name, email, phone,employeeType=null, managerName=null){
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.employeeType = employeeType;
        this.managerName = managerName;
    }
}