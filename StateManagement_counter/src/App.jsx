import { useState } from 'react'
import Counter from './Component/Counter'
import './App.css'



function App() {
  const [count, setCount] = useState(1)

  function Increment(){
    setCount(count+1)
  }
  function Decrement(){
    setCount(count-1)
  }

  return (
    <>
<button onClick={Increment}>Increment</button>
<button onClick={Decrement}>Decrement</button>
<Counter Item={count}/>
    </>
  )
}

export default App
