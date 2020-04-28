import React from 'react'
import './App.css'
import { add } from './utils/add'

class App extends React.Component {
  render () {
    return (
      <>
       <div className="hello" onClick={add(1, 2)}>你好啊</div>
      </>
    )
  }
}

export default App
