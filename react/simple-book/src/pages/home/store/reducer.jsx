import { fromJS } from 'immutable';
import * as CONSTANTS from './constant.js'
const defaultState = fromJS({
  topicList: []
})

function homeReducer(state = defaultState, action) {
  switch (action.type) {
    case CONSTANTS.CHANGE_HOME_DATA:
      return state.merge({ // 合并
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList)
      });
    default:
      return state
  }
}

export default homeReducer;
