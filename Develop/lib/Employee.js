// TODO: Write code to define and export the Employee class
class Employee {
  constructor(name,role,email,id){
  this.name = name;
  this.role = role;
  this.email = email;
  this.id = id;
  }
  getName(){
    return this.name;
  }

  getRole(){
    return this.role;
  }

  getId(){
    return this.id;
  }

  getRole(){
    return this.role;

}

module.exports = Employee;
