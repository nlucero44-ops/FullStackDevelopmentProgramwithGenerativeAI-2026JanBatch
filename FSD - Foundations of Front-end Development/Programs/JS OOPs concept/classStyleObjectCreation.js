// function style ie ES5 
function Employee1() {
    // property 
    this.id=100;
    this.name = "Bob"
    // behaviour 
    this.displayEmployee1= function() {
        document.write("<br/> Display function part of ES5 style object creation")
        document.write("<br/> id is "+this.id)
        document.write("<br/> name is "+this.name)
    }
}
let emp1 = new Employee1();
emp1.displayEmployee1();

// class style ie ES6
class Employee2 {
    // property without this, var as well as let. these variable part of object without this keyword  
    //this.id=101;
    //let id =101;
    //var id = 101;
    id =100;
    name = "Bob"
    // behaviour 
    displayEmployee2() {
        document.write("<br/> Display function part of ES6 style object creation")
        document.write("<br/> id is "+this.id);
        document.write("<br/> name is "+this.name)
    }
}

let emp2 = new Employee2();
emp2.displayEmployee2();