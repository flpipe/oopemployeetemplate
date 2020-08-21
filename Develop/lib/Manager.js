// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

Class Manager extends Employee {

  constructor(name, role, id, email, officeNo){
super(name, role, id, email);

this.officeNo = this.officeNo;

  }

  getOfficeno(){
    return this.officeNo;
  }

  getRole(){
    return "Manager";
  }
}



module.exports = Manager;