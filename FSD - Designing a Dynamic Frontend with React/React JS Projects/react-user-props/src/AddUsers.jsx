import { useState } from "react";
import DisplayUserInOrderList from "./DisplayUserInOrderList";
import DisplayUserInUnOrderList from "./DisplayUserInUnorderList";

function AddUsers() {
const [user,setUser]=useState("");
const [users,setUsers]=useState([]);

let addUser = ()=> {
    setUsers([...users,user]);
    setUser("")
    alert("user added...")
}
    return(
        <div>
            <h3>Add User</h3>
            <input type="text" name="user" placeholder="Enter user name"
            onChange={(event)=>setUser(event.target.value)} value={user}/>
            <input type="button" value="Add User" onClick={addUser}/>

            <DisplayUserInOrderList userData={users}></DisplayUserInOrderList>
            <DisplayUserInUnOrderList userData={users}></DisplayUserInUnOrderList>
        </div>
    )
}

export default AddUsers;