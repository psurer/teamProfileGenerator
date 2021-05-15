const Emloyee = require('./Employee');

class Manager extends Employee {
    constuctor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = oficeNumber;
    }
    getRole() {
        return Manager;
    }
    getOfficeNumber() {
        return this.officeNumber;
    }

}

module.exports = Manager;