import React, { useState } from 'react';
import logo from './logo.svg';
import Drag1 from './Drag1.jsx'
import './App.css';
import withDragAble from './withDragAble.jsx'

function Header() {
  return (
    <h2>h2</h2>
  )
}
function Footer() {
  // state hooks
  const [ count, setCount ] = useState(1) // state={ 0 } 0默认值
  return (
    <div>
      foot: { count }
      <button onClick={() => {
        let count1 = count + 1
        setCount(count1)
      }}>+</button>
    </div>
  )
}
const DragH2 = withDragAble(Header)
function App() {
  return (
    <>
      {/* <Drag1/> */}
      <DragH2/>
      <Footer/>
    </>
  )
}

export default App;
