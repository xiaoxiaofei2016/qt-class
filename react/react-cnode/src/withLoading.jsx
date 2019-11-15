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
//   return function(...args) {
//     let now = now
//     if (now - pre >= wait) {
//       func(...args)
//     }
//   }
// }
// function fetch1(a, b) {a + b}
// var aa = throttle(fetch1)
// aa(1, 2) => undefined 参数丢失


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
          {/* ...props拿到所有参数 */}
        </Spin>
      )
    }
  }
  return withLoading
}