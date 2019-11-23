import { fromJS } from 'immutable';
const defaultState = fromJS({
  topList: []
})

function homeReducer(state = defaultState, action) {
  switch (action.type) {
    case '':
      return '';
    default:
      return state
  }
}

export default homeReducer;
