import { useState } from "react";
function PrimitiveStateVariables() {
let [id,setId]=useState(100);   // number of state variable 
let [name,setName]=useState("John");  // string state variable
let [salary,setSalary]=useState(50000.50);  // number state variable
let [active,setActive]=useState(true);  // boolean state variable
let updateValue=()=>{
    setId(101);
    setName("Smith");
    setSalary(60000.75);
    setActive(false);
}
let passValue = (id,name)=> {
    alert("Id: "+id+" Name: "+name);
}
let handleValue = (event) => {  // event is the parameter which will receive the event object from the input field
  //  console.log(event);       // event object contains lot of property 
    //console.log(event.target)   // event.target will give the reference of the input field which is generating the event
    //console.log(event.target.name+" ")
    let name = event.target.name;
    let value = event.target.value;
    //console.log(name+" "+value)
    //setId(value);       // it change the value and re-render 
    if(name === "id"){
        setId(value)
    }
    if(name === "name"){
        setName(value)
    }
}
    return(
        <div>
            <h3>Primitive State variables</h3>
    <input type="text" placeholder="Enter the id" name="id" onChange={handleValue}/>
    <input type="text" placeholder="Enter the name" name="name" onChange={handleValue}/>
    <input type="text" placeholder="Enter the salary" name="salary" onChange={(event)=>setSalary(event.target.value)}/>
    <input type="radio" name="active" value="true" onChange={()=>setActive(true)}/>:Yes
    <input type="radio" name="active" value="false" onChange={()=>setActive(false)}/>:No
            <p>Id: {id} </p>
            <p>Name: {name} </p>
            <p>Salary: {salary} </p>
            <p>Active: {active ? "Yes" : "No"} </p>
            {/* <input type="button" value="JS Event with Error" onClick="updateValue()"/> */}
            <input type="button" value="React Event" onClick={updateValue}/>
            <input type="button" value="Change Name" onClick={()=>setName("John Doe")} />
            <input type="button" value="Pass Id and Name" onClick={()=>passValue(id,name)} />
        </div>
    )
}

export default PrimitiveStateVariables;