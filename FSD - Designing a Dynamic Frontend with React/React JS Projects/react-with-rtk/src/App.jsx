import { useSelector } from "react-redux"
import Counter from "./Counter"
import CounterIncrement from "./CounterIncrement"
import CounterDynamicIncrement from "./CounterDynamicIncrement"

function App() {
let name = useSelector(gs=>gs.name)
  return (
    <>
    <h2>React with RTK</h2>
    <p>Global State variable {name}</p>
    <Counter></Counter>
    <CounterIncrement></CounterIncrement>
    <CounterDynamicIncrement></CounterDynamicIncrement>
    </>
  )
}

export default App
