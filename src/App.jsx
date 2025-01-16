import { useEffect, useState } from 'react'

function App() {
  const [count, setCount] = useState(0);
  const [times, setTimes] = useState(0);

  /*
  useEffect (() => {
    //1. The Code that we want to run
    //3. Optional return function
  }, []); //2. Dependency Array
  */
 
  //No Dependencies (works everytime when any state value is changed)
  // useEffect (() => {
  //   console.log("I am no Dependencies useEffect");
  // });

  //Empty Dependencies Array (It works only on 1st mount)
  // useEffect (() => {
  //   console.log("I am Empty Dependencies useEffect");
  // }, []);

  //State Dependencies Array (works only when particular state changes)
  // useEffect (() => {
  //   console.log("I am State Dependencies useEffect");
  // }, [count]);

  //On Mount Cleanup Code
  // useEffect (() => {
  //   console.log("Mounted");
  //   return () => console.log("Unmounted");
  // }, []);

  //Re-Render Cleanup Code
  // useEffect (() => {
  //   console.log("Re-Render");
  //   return () => console.log("Re-Render Cleanup");
  // });

  //State Counter Cleanup Code
  // useEffect (() => {
  //   console.log("State Counter");
  //   return () => console.log("State Counter Cleanup");
  // }, [count]);

  //State Counter Cleanup Code
  useEffect (() => {
    const random = Math.floor(Math.random() * 1000); 
    const timer = setInterval(() => {
      console.log(`${random} - ReRender`);
    }, 1000);
    return () => {
      clearInterval(timer);
      console.log("clearing");
    }
  });

  return (
    <>
      <h3>Count : {count}</h3>
      <h3>Times : {times}</h3>
      <button onClick={() => setCount((value) => value-1)}>-</button>
      <button onClick={() => setCount((value) => value+1)}>+</button>
      <button onClick={() => setTimes((value) => value+1)}>Times</button>
    </>
  )
}

export default App
