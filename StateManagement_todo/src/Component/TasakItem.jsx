import React from "react";
function TaskItem({item,HandleDelet, handleToggle}) {
    return <div><h2 style={item.completed?{color:"red"}:{color:"blue"}}>{item.task}</h2>
    <button onClick={handleToggle}>{item.completed?"Yes":"No"}</button>
   
    <p>{item.taskAssignedTo}</p>
    <button onClick={HandleDelet}>Delete</button>
    </div>;
  }
  
  export default TaskItem;