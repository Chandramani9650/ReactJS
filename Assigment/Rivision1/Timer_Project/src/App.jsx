import { useState } from 'react'
import './App.css'
import Timer from './component/Timer'


function App() {
  const [showComponent, setshowComponent] = useState(false)

  return (
    <>

    <button onClick={()=>setshowComponent(!showComponent)}>start count</button>
    {showComponent?<Timer/>:null}
    </>
  )
}

export default App
