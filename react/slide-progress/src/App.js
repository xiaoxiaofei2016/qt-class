import React from 'react';
import logo from './logo.svg';
import './App.css';
import SlideProgress from './SlideProgress'

function App() {
  return (
    <div className="App">
      <SlideProgress value={0.5} onChange={(p) => {
        console.log(p)
      }}/>
    </div>
  );
}

export default App;
