import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { combineReducers } from 'redux-immutable'; // 支持对每个store的划分
import homeReducer from '../pages/home/store/reducer.jsx';
import headerReducer from '../common/header/store/reducer.js';
import loginReducer from '../pages/login/store/reducer.js';

const reducer = combineReducers({ // fromJS({ home: , detail: , ... })
  home: homeReducer, // home模块
  header: headerReducer,
  login: loginReducer
})
const store = createStore(reducer, applyMiddleware(thunk));

export default store;
