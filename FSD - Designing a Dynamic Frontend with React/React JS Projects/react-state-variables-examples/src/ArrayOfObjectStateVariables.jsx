import { useState } from "react"

function ArrayOfObjectStateVariables() {
    let [employees, setEmployees] = useState([
        { id: 100, name: "John", age: 30 },
        { id: 200, name: "Jane", age: 25 },
        { id: 300, name: "Bob", age: 35 },
        { id: 100, name: "Alice", age: 28 },
    ])
    return(
        <div>
            <h3>Employee Details</h3>
            <table border="1">
                <thead>
                    <tr>
                        <th>Index</th>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
            </thead>
            <tbody>
            {
                employees.map((emp,index)=>
                    <tr key={index}>
                        <td>{index}</td>
                        <td>{emp.id}</td>
                        <td>{emp.name}</td>
                        <td>{emp.age}</td>
                    </tr>
                )
            }
            </tbody>
            </table>
        </div>
    )
}

export default ArrayOfObjectStateVariables