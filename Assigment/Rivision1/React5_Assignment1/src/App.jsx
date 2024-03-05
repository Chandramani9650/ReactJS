import { useEffect, useState } from 'react'
import DataDisplay from './component/DataDisplay'



function App() {
  const [data, setdata] = useState([])
  const [isLoading, setisLoading] = useState(false)
  const [error, seterror] = useState(false)

  async function fetchData(){
     setisLoading(true)
     try {
      let response = await fetch("https://jsonplaceholder.typicode.com/posts")
      let data  = await response.json()
      // console.log(data);
      setdata(data)
      setisLoading(false)
      
     } catch (error) {
      seterror(true)
      setisLoading(false)
      
     }
  }






  if(isLoading){
    return <h1>Loading ...</h1>
  }
  if(error){
    return <h1>Something went wrong .....</h1>
  }

  return (
    <>

    <button onClick={fetchData}>Click here to show data</button>
    <DataDisplay data={data}/>
    </>
  )
}

export default App
