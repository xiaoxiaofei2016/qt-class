import React, { Component } from 'react';
import { is } from 'immutable';

class BaseCom extends Component {
  shouldComponentUpdate(nextProps, nextState) { // 组件是否更新
    const thisProps = this.props || {}
    if (Object.keys(thisProps).length !== Object.keys(nextProps).length) { // 对象属性个数不一样，则更新
      return true
    }
    for (const key in nextProps) {
      if (!is(thisProps[key], nextProps[key])) { // 个数相同，对应属性值不同，更新
        console.log(true, '更新')
        return true
      }
    }
    console.log(false, '不更新')
    return false
  }

  state = {  }
  render() { 
    return ( 
      <>
      </>
     );
  }
}
 
export default BaseCom;