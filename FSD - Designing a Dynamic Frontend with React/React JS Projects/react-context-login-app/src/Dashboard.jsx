import { useContext } from "react"
import AuthContext from "./AuthContext"

function Dashboard() {

let obj = useContext(AuthContext);
    
    
    return(
        <div>
             {
                obj.user 
                && 
                (
                    <div>
                        <h2>Dashboard Component</h2>
                        User Login : {obj.user}
                        <input type="button" value="logout" onClick={()=>obj.logout()}/>
                    </div>
                )
            }
        </div>
    )
}
export default Dashboard