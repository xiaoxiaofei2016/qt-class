import axios from 'axios';
import { fromJS } from 'immutable';
import * as constants from './constant';

// redux-thunk 里面的action
export const getHomeInfo = () => { // 设置数据
  return (dispatch) => {
    axios.get('/api/home.json').then(res => {
      const result = res.data.data
      dispatch({
        type: constants.CHANGE_HOME_DATA,
        topicList: result.topicList,
        articleList: result.articleList,
        recommendList: result.recommendList
      })
    })
  }
}

