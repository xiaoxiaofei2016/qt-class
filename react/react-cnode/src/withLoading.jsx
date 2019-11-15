import React, { Component } from 'react'
import { Spin } from 'antd'
// // 节流
// let pre = 0
// function fetch() {
//   let now = now
//   if (now - pre >= wait) {
//     console.log(123)
//   }
// }
// btn.mouseMove = fetch
// btn.mouseMove = fetch1
// // 过程抽象
// // 高阶函数
// function myThrotle(func) {
//   let pre = 0
//   return function() {
//     let now = now
//     if (now - pre >= wait) {
//       func()
//     }
//   }
// }

export default function(Com) {
  class withLoading extends Component {
    state = {
      isLoading: false
    }
    ref = React.createRef()
    componentDidMount() {
      this.setState({
        isLoading: true
      })
      this.ref.current.initLoading()
      .then(data => {
        this.setState({
          isLoading: false
        })
      })
      .catch(err => {
        this.setState({
          isLoading: false
        })
      })
    }
    render() {
      const props = this.props
      return (
        <Spin spinning={this.state.isLoading}>
          <Com ref={this.ref} {...props} from="fromWithLoading"/>
        </Spin>
      )
    }
  }
  return withLoading
}