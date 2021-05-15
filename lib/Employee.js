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