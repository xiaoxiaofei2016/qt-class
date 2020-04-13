import React, { Component } from 'react';
import PropTypes from 'prop-types'; // 传递的参数类型检验

class XiaojiejieItem extends Component {
  constructor(props) {
    super(props)
    // this.handleClick = this.handleClick.bind(this)
  }

  shouldComponentUpdate(newProps, newState) {
    if (newProps.content !== this.props.content) {
      return true
    } else {
      return false
    }
  }

  // 组件第一次存在于dom中，函数是不会被执
  // 如果已经存在dom中，函数才会被执行
  componentWillReceiveProps(newProps) {
    console.log('child-componentWillReceiveProps')
  }
  componentWillUpdate(nextProps, nextState) {
    console.log('1-componentWillUpdate')
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('3-componentDidUpdate')
  }

  render() {
    console.log('2-child-render')
    return (
      <div>
        <li onClick={this.handleClick}>
          {this.props.avname}-{this.props.content}
        </li>
      </div>
    );
  }
  handleClick = () => {
    this.props.deleteItem(this.props.index)
  }
  // handleClick() {
  //   this.props.deleteItem(this.props.index)
  // }
}

XiaojiejieItem.propTypes = {
  avname: PropTypes.string.isRequired,
  content: PropTypes.string,
  index: PropTypes.number,
  deleteItem: PropTypes.func
}
XiaojiejieItem.defaultProps = { // 默认值
  avname: '松岛枫'
}


export default XiaojiejieItem;