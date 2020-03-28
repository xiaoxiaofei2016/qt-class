import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actionCreators from '../store/actionCreate';
import { ListItem, ListInfo, LoadMore } from '../style.js';

class List extends Component {
  state = {  }
  render() {
    const { list, page } = this.props
    console.log(list.toJS()) // 转回原生js
    return ( 
      <div>
        {
          list.map((item, i) => {
            return (
              <Link to={'/detail' + item.get('id ')} key={i}>
                <ListItem>
                <img alt='' className='pic' src={item.get('imgUrl')} />
                  <ListInfo>
                    <h3 className="title">
                      { item.get('title') }
                    </h3>
                    <p className="desc">
                      { item.get('desc') }
                    </p>
                  </ListInfo>
                </ListItem>
              </Link>
            )
          })
        }
        <LoadMore onClick={() => {
          this.props.getMoreList(page)
        }}>更多文字</LoadMore>
      </div>
     );
  }
}
const mapStateToProps = (state) => ({ //将store里的state（数据源）绑定到指定组件的props中
  list: state.getIn(['home', 'articleList']),
  page: state.getIn(['home', 'articlePage'])
})
const mapDispatchToProps = (dispatch) => { // 将store里的action（操作数据的方法）绑定到指定组件的props中
  return {
    getMoreList(page) {
      // action 纯对象 thunk使dispatch支持function
      dispatch(actionCreators.getMoreList(page))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(List);