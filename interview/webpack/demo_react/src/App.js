import React from 'react'
import './App.css'
import { add } from './utils/add'

class App extends React.Component {
  render () {
    return (
      <div>
       <div className="hello" onClick={add}>你好啊</div>
      </div>
    )
  }
}

export default App
