import React, { PureComponent } from 'react';
import logo from './logo.svg';
import './App.css';

// 浅比较
class App extends PureComponent {
  state = {
    val: 4
  }
  shallowEqual(obja, objb) { // 判断两个对象是否相等
    if (Object.keys(obja) !== Object.keys(objb)) {
      return false
    }
    let keys = Object.keys(obja)
    for (let i = 0; i < keys.length; i++) {
      // object.is() 修复NaN:  NaN === NaN false
      if (Object.is(obja[keys[i]], objb[keys[i]])) {
        return false
      }
    }
    return true
  }
  shouldComponentUpdate(nextProps, nextState) {
    // 比较 this.props nextProps state nextState一样就不更新
    return !this.shallowEqual(this.props, nextProps)
  }
  handleChange = () => {
    this.setState({ 
      val: 4
     });
  }
  render() {
    console.log('render')
    return (
      <div>
        {this.state.val}
        <button onClick={this.handleChange}>change</button>
      </div>
    )
  }
}

export default App;
