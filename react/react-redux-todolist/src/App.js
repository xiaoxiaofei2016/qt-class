import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux' // Connect 高阶组件 hoc

class App extends React.Component {
  state = {
    inputText: ''
  }
  handleChange = (e) => {
    this.setState({
      inputText: e.target.value
    })
  }
  render() {
    // console.log(this.props)
    const { todolist, addTodo } = this.props
    return (
      <div>
        {/* key 在父节点下面 唯一 */}
        {
          todolist.map((item, i) => {
            return (
            <li key={i}>{ item.content }</li>
            )
          })
        }
        <div>
          <input value={this.state.inputText} onChange={this.handleChange} />
          <button onClick={() => {
            console.log(this.state.inputText)
            // store.dispatch
            addTodo(this.state.inputText)
          }}>提交</button>
        </div>
      </div>
    )
  }
}
// 拿到store中的数据 是映射数据 放到props中
const mapStateToProps = (state) => {
  console.log(state)
  return {
    todolist: state
  }
}
// action 有 type 和 payload 载荷
const mapDispatchToProps = (dispatch) => { // 不再通过store.dispatch取到dispatch
  return {
    addTodo(content) {
      dispatch({
        type: 'ADD_TODO', // 唯一的
        content
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);