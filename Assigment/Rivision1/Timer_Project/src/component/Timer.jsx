import { useEffect, useState } from "react";
import React from "react";

function Timer(){

const [count, setcount] = useState(10)
 useEffect(()=>{
    const delay = setInterval(()=>(
        setcount((number=>{
            if(number==0){
             return clearInterval(delay)
            }
            console.log(number);
        return number-1
        }))

    
    ),1000)
    return ()=>{
        clearInterval(delay)
    }
 },[])
    return(
        <div>
       {/* <input type="number" placeholder="enter number" onChange={(e)=>setcount(e.target.value)}/> */}
       
       <p>Count: {count}</p>
        </div>
    )
}
export default Timer;