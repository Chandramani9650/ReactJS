function DataDisplay({data}){
    console.log(data[1]);
    return(
        <div style={{display:"grid", gridTemplateColumns:"repeat(2,1fr)", gap:"20px", padding:"40px"}}>
          {data.map((item)=>(
            <div key={item.id} style={{border:"1px solid black", padding:"30px", backgroundColor:"ButtonHighlight"}}>
             <h2>User ID: {item.userId}</h2>
             <p>Title: {item.title}</p>
             </div>
          ))}
        </div>
    )
}

export default DataDisplay;
