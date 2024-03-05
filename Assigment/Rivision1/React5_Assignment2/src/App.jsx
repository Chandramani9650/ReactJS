import { useEffect, useState } from 'react'

import PostItem from './component/PostItem'



function App() {
  const [post, setpost] = useState([])
  const [isLoading, setisLoading] = useState(false)
  const [error, seterror] = useState(false)
  const [page, setpage] = useState(1)
  const [totalpage, settotalpage] = useState(1)

  async function fetchData(){
     setisLoading(true)
     try {
      let response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`)
      let data  = await response.json()
      // console.log(data);
      setpost(data)
      setisLoading(false)
      console.log(data);
      
      
     } catch (error) {
      seterror(true)
      setisLoading(false)
      
     }
  }



useEffect(()=>{
  fetchData()
  
},[page])


  if(isLoading){
    return <h1>Loading ...</h1>
  }
  if(error){
    return <h1>Something went wrong .....</h1>
  }

  return (
    <>
    <button disabled={page==1} onClick={()=>setpage(page-1)}>Previous</button>
    
    <button  disabled ={page==10} onClick={()=>setpage(page+1)}>next</button>
    
   <PostItem data={post} />
    </>
  )
}

export default App

