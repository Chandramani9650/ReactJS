import React from 'react'

const PostItem = ({data}) => {
return(
    <div style={{display:"grid", gridTemplateColumns:"repeat(3,1fr)", padding:"20px", gap:"20px"}}>
        {data.map((item)=>(
            <div key={item.id} style={{border:"1px solid red", padding:"10px", borderRadius:"20px"}}>
              <h1>Id : {item.id}</h1>
              <p>UserId : {item.userId}</p>
              <p>title : {item.title}</p>
              <p></p>
            </div>
        ))}
    </div>
)
    
}

export default PostItem
