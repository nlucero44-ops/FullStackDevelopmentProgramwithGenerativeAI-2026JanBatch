import { useDispatch } from "react-redux";
import { increment } from "./slice";

function CounterIncrement() {

let dispatch = useDispatch();

let incrementValue = ()=> {
    // dispatch({type:"INCREMENT"}) // IN CORE REDUX 
    dispatch(increment());  // calling increment action function part of slice 
}
    return(
        <div>
            <h3>Counter Static Increment</h3>
            <input type="button" value="Increment"
            onClick={incrementValue}/>
        </div>
    )
}

export default CounterIncrement;