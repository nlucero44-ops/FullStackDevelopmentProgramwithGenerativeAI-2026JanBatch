import { useSelector } from "react-redux";

function Counter(){
let n = useSelector(gs=>gs.n)

    return(
        <div>
            <h3>Counter Component</h3>
            <p>Value of global state n variable is {n}</p>
        </div>
    )
}

export default Counter;