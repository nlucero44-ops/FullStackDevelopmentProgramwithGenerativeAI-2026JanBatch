import { useDispatch } from "react-redux";
import { dynamicIncrement, increment } from "./slice";
import { useState } from "react";
function CounterDynamicIncrement() {
let [num,setNum]=useState();    // local state variable. 
let dispatch = useDispatch();
let incrementValue = ()=> {
    // dispatch({type:"INCREMENT"}) // IN CORE REDUX 
    dispatch(dynamicIncrement({num:num}));  // calling increment action function part of slice 
    setNum("");
}
    return(
        <div>
            <h3>Counter Dynamic Increment</h3>
            <input type="text" name="num" value={num}
            placeholder="Enter the number" onChange={(event)=>setNum(event.target.value)}/>
            <input type="button" value="Dynamic Increment"onClick={incrementValue}/>
        </div>
    )
}

export default CounterDynamicIncrement;