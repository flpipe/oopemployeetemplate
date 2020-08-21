// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee");

class Engineer extends Employee {
  super(name, role, email, id, github);
  this.github = github;

  getGithub(){
    return this.github;
  }

  getRole(){
    return "engineer";
  }




}

module.exports = Engineer;