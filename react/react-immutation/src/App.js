import React from 'react';
import logo from './logo.svg';
import './App.css';
import immutable from 'immutable'

// 可变
let a = [0, 1, 2]
a.push(3)
// 不可变
let immutableArr = immutable.fromJS([2, 3, 4])

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
