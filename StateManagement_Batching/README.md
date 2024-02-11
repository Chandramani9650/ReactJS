# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

```JSX
import React from 'react'

function App() {
  const [count, setCount] = React.useState(0);

  const handleClick = () => {
    setCount(count + 1);
    console.log(count); // You will see the older value of count in console
  };

  return (
    <div>
      <p>Button is clicked {count} times</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App
```
***After updating the state, React will eventually re-render the component to reflect the new state. But this re-render doesn’t happen right away. It’s scheduled and managed by React's reconciliation process, which is why it seems asynchronous. So if you try to log the value of count right after calling setCount, you'll still see the old value, not the updated one. This is because the update to count hasn't been applied yet—it's scheduled to happen later. This process is known as batching. React batches multiple state updates for performance optimization.***

```JSX
import React from 'react'

// Your task is to explain why count value is not updated to 3 as expected
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

export default App
```
Expected Behaviour : `count` value being updated to 3

Actual Behaviour : `count` value is 1

Why is that the case ?

- Each `setCount(count + 1)` call doesn't immediately update the `count`. They all see the same initial value of `count`.
- Due to React's batching, all these updates are processed together.
- As a result, `count` increases only by 1, not 3, even though `setCount` is called three times.

### Practical Implication

Understanding this asynchronous nature is crucial for coding correctly. For instance, if you have sequential state updates that depend on the previous state, you should use the functional form of the updater function:

```jsx
setCount(prevCount => prevCount + 1);
```

This ensures that you're working with the most recent state value. Let’s see how that goes in the next section

**Advantages of this Approach:**

```JSX
function App() {
  const [count, setCount] = React.useState(0);

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    console.log(count);
  };

  return (
    <div>
      <p>Button is clicked {count} times</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

const reactRoot = ReactDOM.createRoot(document.getElementById("root"));
reactRoot.render(<App />);
```

- By using `prevCount => prevCount + 1`, each call to `setCount` uses the most recent state value.
- It ensures that each update is based on the state from the previous update.
- After clicking the button, `count` correctly increments by 3.

In scenarios where you need to perform multiple state updates based on the previous state value, always use the functional form of the state updater function (`prevCount => prevCount + 1`). This ensures that each update is applied sequentially and accurately, respecting React's asynchronous state update mechanism.

### Summary

- `setCount` is asynchronous because React batches updates and schedules re-rendering for later, not immediately.
- This behavior is part of React's design to optimize performance.
- Always be mindful of this when working with state updates, especially when they are sequential or dependent on the previous state.
- In scenarios where you need to perform multiple state updates based on the previous state value, always use the functional form of the state updater function (`prevCount => prevCount + 1`). This ensures that each update is applied sequentially and accurately, respecting React's asynchronous state update mechanism.

