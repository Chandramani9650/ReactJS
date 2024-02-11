import { useState } from 'react'
import TaskItem from './Component/TasakItem';

import './App.css'

function App() {
  const [tasks, setTasks] = useState([]);
  const [formState, setFormState] = useState({
    task: "", // string
    completed: false, // boolean
    taskAssignedTo: "", // string
  });

  function handleChange(event) {
    // Implement logic to handle form changes
    // console.log(event.target.value);
  let targetvalue = event.target.name==="completed"?event.target.checked:event.target.value

    setFormState({...formState,
    [event.target.name]:targetvalue
    })
  }

  function HandleDelete(index){
    let updateArray = [...tasks]
    // console.log(item);
    updateArray.splice(index,1)
    setTasks(updateArray)
  }
  function handleToggle(index){
    let data = [...tasks]
    data[index].completed = !data[index].completed
    setTasks(data)
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Implement logic to handle form submission
    setTasks([
      ...tasks,formState
    ])

  }



  return (
    <>
     <div className='container'>
        <form onSubmit={handleSubmit}>
          <input name="task" type="text" placeholder="Add Task" onChange={handleChange} />
          <label>
            Completed:
            <input name="completed" type="checkbox" onChange={handleChange}/>
          </label>
          <select name="taskAssignedTo" onChange={handleChange}>
            <option value="">Select Assignee</option>
            <option value="Bruce">Bruce</option>
            <option value="Barry">Barry</option>
            <option value="Clark">Clark</option>
            <option value="Oliver">Oliver</option>
            <option value="Jina">Jina</option>
          </select>
          <button  type="submit">Add Task</button>
        </form>
      </div>
    
      {tasks.map((item, index) => (
        <TaskItem key={index} item={item} HandleDelet={()=>HandleDelete(index)} handleToggle={()=>handleToggle(index)}/>
      ))}
    </>
  )
}

export default App
