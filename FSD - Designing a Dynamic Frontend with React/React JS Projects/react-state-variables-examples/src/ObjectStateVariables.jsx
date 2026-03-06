import { useState } from "react"

function ObjectStateVariables() {
    const [employee, setEmployee] = useState({
        id:1,
        name:"John Doe",
        department:"Engineering",
        salary:50000,
        address: {
            street: "123 Main St",
            city: "Anytown",
            state: "CA",
            zip: "12345"
        }
    })
    return(
        <div>
            <h2>Employee Information</h2>
            <p>ID: {employee.id}</p>
            <p>Name: {employee.name}</p>
            <p>Department: {employee.department}</p>
            <p>Salary: ${employee.salary}</p>
            <p>Address: {employee.address.street}, {employee.address.city}, {employee.address.state} {employee.address.zip}</p>
        </div>
    )
}
export default ObjectStateVariables;