import React from 'react';
import logo from './logo.svg';
import './App.css';
import immutable from 'immutable'

// 可变
let a = [0, 1, 2]
a.push(3)
// 不可变
let immutableArr = immutable.fromJS([2, 3, 4])
let b = immutableArr.push(5)
console.log(immutableArr.toJS()) // 原数组不变 [2, 3, 4]
console.log(b.toJS()) // [2, 3, 4, 5] 返回新的数组

let obj = {
  a: 1,
  b: {
    c: 2
  },
  d: {
    e: 3
  }
}
let imObj = immutable.fromJS(obj)
console.log(imObj.getIn(['b', 'c'], 'default')) // 获取属性值
let imObj1 = imObj.setIn(['d', 'e'], 'ee') // 设置属性值

let obj1 = {
  ...obj,
  b: 2
}

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
