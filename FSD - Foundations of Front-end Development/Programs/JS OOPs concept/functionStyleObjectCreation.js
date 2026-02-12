// creating simple function style object 
function Employee(){
    // property         this keyword refer to current object. 
    this.id = 100;      // this keyword help to create object property in function style 
    this.name = "John"
    this.age = 21;           // local variable 
    var isActive = true;    // local variable consider not part of objects ie global for all employee 

    // behaviour 
    this.displayEmployee = function() {
            document.write("<br/> Employee details")
            document.write("<br/> Id is "+this.id);
            document.write("<br/> Name is "+this.name);
            document.write("<br/> Age is "+this.age);
            document.write("<br/> isActive "+isActive)    
    }
}
//Employee(); // it consider as normal function 
let emp1 = new Employee(); // object type function consider 
// document.write("<br> Object creation in function style")
// document.write("<br/> id is "+emp1.id)
// document.write("<br/> name is "+emp1.name)
// document.write("<br/> age is "+emp1.age)
//document.write("<br/> isActive is "+emp1.isActive)

let emp2 = new Employee(); // object type function consider 
// document.write("<br> Object creation in function style")
// document.write("<br/> id is "+emp2.id)
// document.write("<br/> name is "+emp2.name)
// document.write("<br/> age is "+emp2.age)
// document.write("<br/> isActive is "+emp2.isActive)

emp1.displayEmployee();
emp2.displayEmployee();