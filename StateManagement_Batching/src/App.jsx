import { useEffect, useState } from 'react'
import React from 'react';

import './App.css'

// function App() {
//   const [count, setCount] = React.useState(0);

//   const handleClick = () => {
    
//     setCount(count + 1);
//     console.log(count); // You will see the older value of count in console
//   };
 


//   return (
//     <div>
     
//       <button onClick={handleClick}>Click Me</button>
//       <p>Button is clicked {count} times</p>
//     </div>
//   );
// }




function App() {
  const [count, setCount] = React.useState(0);

  const handleClick = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
		console.log(count);
  };

  

  return (
    <div>
      <p>Button is clicked {count} times</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}




export default App;
