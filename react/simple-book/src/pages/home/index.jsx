import React, { Component } from 'react';
import { connect } from 'react-redux'
import BaseComponent from '../../lib/BaseComponent.jsx';
import { HomeWrapper, HomeLeft } from './style';
import { actionCreators } from './store/index.js';

class Home extends BaseComponent {
  componentDidMount() {
    this.props.changeHomeData()
  }
  state = {}
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className='banner-img'
            alt=''
            src="//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
        </HomeLeft>
      </HomeWrapper>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    changeHomeData() {
      // action {} -> redux-thunk function() {}
      dispatch(actionCreators.getHomeInfo())
    }
  }
}
export default connect(null, mapDispatchToProps)(Home);
