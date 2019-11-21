import { combineReducers } from 'redux'
import shopCart from './shopcart'
import filter from './filter'
export default combineReducers({
  shopCart,
  filter
})