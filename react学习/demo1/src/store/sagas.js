import { takeEvery, put } from 'redux-saga/effects'
import { GET_MY_LIST } from './actionTypes'
import { getListAction } from './actionCreators'
import axios from 'axios'

//generator
function* mySaga() {
  yield takeEvery(GET_MY_LIST, getList)
}

function* getList() {
  const res = yield axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList')
  const action = getListAction(res.data.data.list)
  yield  put(action)
}

export default mySaga