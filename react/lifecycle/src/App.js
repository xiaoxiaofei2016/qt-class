import React from 'react';
import logo from './logo.svg';
import './App.css';
import Child1 from './Child1.jsx'
import Parent from './Parent.jsx'
class App extends React.Component {
  state = {
    list: [1, 2, 3],
    show: false
  }
  componentDidMount() {
    console.log('componentDidMount')
    setInterval(() => {
      let list = this.state.list.slice(0)
      list.push(10)
      this.setState({
        list
      })
    }, 1000)
  }
  render() {
    return (
      <>
      <Parent/>
        <button onClick={() => {
          this.setState({
            show: !this.state.show
          })
        }}>卸载</button>
        {
          !this.state.show ? <Child1 list={this.state.list}/> : null
        }
      </>
    )
  }
}

export default App;
