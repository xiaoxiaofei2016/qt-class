import React, { Component } from 'react';
import 'antd/dist/antd.css';
import store from './store'
// import { CHANGEINPUT, ADD_ITEM, DELETE } from './store/actionTypes'
import { changeInputAction , addItemAction, deleteItemAction, getTodoList, getMyListAction } from './store/actionCreators'
import TodoListUI from './toDoListUI.jsx'


class TodoList extends Component {
  constructor(props) {
    super(props)
    console.log(store.getState())
    this.state = store.getState()
    this.storeChange = this.storeChange.bind(this)
    store.subscribe(this.storeChange) // 订阅 将store发生的改变更新，不设置会出现问题
  }
  ChangeInputValue = (e) => {
    const action = changeInputAction(e.target.value)
    store.dispatch(action)
  }
  storeChange() {
    this.setState(store.getState())
  }
  clickBtn = () => {
    const action = addItemAction()
    store.dispatch(action)
  }
  deleteItem = (index) => {
    console.log(index)
    const action = deleteItemAction(index)
    store.dispatch(action)
  }

  componentDidMount() {
    // const action = getTodoList() // 运用了中间件react-thunk后可以dispatch一个函数
    // store.dispatch(action)


    const action = getMyListAction()
    store.dispatch(action)
  }

  render() {
    return (
      <TodoListUI 
        inputValue={this.state.inputValue}
        ChangeInputValue={this.ChangeInputValue}
        clickBtn={this.clickBtn}
        list={this.state.list}
        deleteItem={this.deleteItem}
      />
    );
  }
}

export default TodoList;