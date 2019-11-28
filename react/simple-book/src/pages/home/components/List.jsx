import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ListItem, ListInfo, LoadMore } from '../style.js';

class List extends Component {
  state = {  }
  render() {
    const { list, page } = this.props
    return ( 
      <div>
        {
          list.map((item, i) => {
            return (
              <Link to={'/detail' + item.get('id ')}>
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
const mapStateToProps = (state) => ({
  list: state.getIn(['home', 'articleList']),
  page: state.getIn(['home', 'articlePage'])
})
mapDispatchToProps = (dispatch) => {
  return {
    getMoreList(page) {
      // action 纯对象 thunk使dispatch支持function
      dispatch()
    }
  }
}
export default connect(mapStateToProps)(List);