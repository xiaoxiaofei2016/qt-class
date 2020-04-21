import { CHANGEINPUT, ADD_ITEM, DELETE_ITEM, GET_LIST, GET_MY_LIST } from './actionTypes'
import axios from 'axios'
export const changeInputAction = (value) => ({
  type: CHANGEINPUT,
  value: value
})
export const addItemAction = () => ({
  type: ADD_ITEM
})
export const deleteItemAction = (index) => ({
  type: DELETE_ITEM,
  value: index
})
export const getListAction = (list) => ({
  type: GET_LIST,
  value: list
})

export const getTodoList = () => {
  return (dispatch) => {
    axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList')
    .then(res => {
      const list = res.data.data.list
      const action = getListAction(list)
      dispatch(action)
    })
  }
}


// saga
export const getMyListAction = () => ({
  type: GET_MY_LIST
})