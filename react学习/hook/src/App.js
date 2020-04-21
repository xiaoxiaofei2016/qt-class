import React, { useState, useEffect, useContext, createContext } from 'react';
import Example from './Example.jsx'
const CountContext = createContext()

function App() {
  const [ count, setCount ] = useState(0)
  useEffect(() => {
    console.log('起来了', count)
    return () => {
      console.log('卸载')
    }
  }, [count]) // count变化了，就会执行卸载，若要不执行，可以设为[]
  return (
    <>
      <h2>{count}</h2>
      <button onClick={() => {
        setCount(count+1)
      }}>增加</button>
      <CountContext.Provider value={count}>
        <Counter/>
      </CountContext.Provider>
      <Example/>
    </>
  );
}


function Counter() {
  let sum = useContext(CountContext)
  return (<h2>{sum}</h2>)
}

export default App;
