import * as CONSTANTS from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  focus: false
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case CONSTANTS.SEARCH_FOCUS:
      return state.set('focus', true)
    default:
      return state
  }
}