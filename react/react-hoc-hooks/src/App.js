import React from 'react';
import logo from './logo.svg';
import Drag1 from './Drag1.jsx'
import './App.css';
import withDragAble from './withDragAble.jsx'

function Header() {
  return (
    <h2>h2</h2>
  )
}
const DragH2 = withDragAble(Header)
function App() {
  return (
    <>
      <Drag1/>
      <DragH2/>
    </>
  )
}

export default App;
