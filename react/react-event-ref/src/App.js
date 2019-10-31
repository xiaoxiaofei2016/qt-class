import React from 'react';
import logo from './logo.svg';
import './App.css';
class Button extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      red: true
    }
  }
  handleClick = () => {
    console.log(this) // Button
    console.log(this.state)
  }
   
  render() {
    // 高频触发
    const { abc } = this.props
    const { red } = this.state
    return (
      <button style={{ color: red ? 'red' : 'blue' }} onClick={this.handleClick}>
        { this.props.children }
      </button>
    )
  }
}

function App() {
  return (
    <div className="App">
      <Button abc="123">登录</Button>
      <Button abc="456">注册</Button>
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
