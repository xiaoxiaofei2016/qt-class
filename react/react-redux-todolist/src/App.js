import React from 'react';
import { connect } from 'react-redux' // 高阶组件connect
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div>
        123
      </div>
    )
  }
}
// state 
const mapStateToProps = (state) => {
  console.log(state);
  return {
    ...state
  }
}

export default connect(mapStateToProps, null)(App); // curry化
