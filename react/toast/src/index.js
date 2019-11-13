import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux'

// react提倡不可变数据
// 生成默认值
// 后续 dispath -> action - reducer -store
function discuss(state, action) {
  switch (action.type) {
    case 'PUSH_DIS':
      return [
        ...state,
        action.content
      ]
    default:
      return []
  }
  // return []
}
const store = createStore(discuss)
setInterval(() => {
  store.dispatch({
    type: 'PUSH_DIS',
    content: '评论1'
  })
}, 1000)

class List extends React.Component {
  render() {
    return (
      <div>
        {
          store.getState().map((dis) => {
            return (
              <li>{dis}</li>
            )
          })
        }
      </div>
    )
  }
}

store.subscribe(() => {
  ReactDOM.render(<List />, document.getElementById('root'));
})


// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<List />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
