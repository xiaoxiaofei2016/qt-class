import React from 'react';
import store from './store'
import { connect } from 'react-redux'

const TodoList = (props) => {
  let { inputValue, inputChange, addItem, list, deleteItem } = props
  console.log('render')
    return (
      <div>
        <div>
          <input type="text" 
            value={inputValue}
            onChange={inputChange}
          />
          <button onClick={addItem}>提交</button>
        </div>
        <ul>
          {
            list.map((item, index) => {
              return <li key={index + item} onClick={() => {
                deleteItem(index)
              }}>{item}</li>
            })
          }
        </ul>
      </div>
    );
}


const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    inputChange(e) {
      const action = {
        type: 'change_input',
        value: e.target.value
      }
      store.dispatch(action)
    },
    addItem() {
      const action = {
        type: 'add_item'
      }
      store.dispatch(action)
    },
    deleteItem(index) {
      console.log(index, '删除的序号')
      const action = {
        type: 'delete_item',
        value: index
      }
      store.dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);