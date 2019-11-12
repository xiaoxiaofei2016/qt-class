import React, { Component } from 'react'
import ReactDom from 'react-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

let key = 0
class Toast extends Component {
  state = {
    toastList: []
  }
  addNotice(icon, content, duration) {
    // console.log(1)
    key ++
    const item = {key, icon, content, duration}
    let toastList = this.state.toastList.slice(0)
    toastList.push(item)
    this.setState({
      toastList
    })
    setTimeout(() => {
      let toastList1 = this.state.toastList.slice(0)
      let index = toastList1.findIndex(item => item.key === key)
      toastList1.splice(index, 1)
      this.setState({
        toastList: toastList1
      })
    }, duration)
  }
  render() {
    const { toastList } = this.state
    // const { show } = this.props
    // if (!show) return null
    return (
      <TransitionGroup>
        {
          toastList.map((toast) => {
            return (
              // <Notice {...toast}/>
            <CSSTransition
              key={toast.key}
              classNames="notice"
              timeout={300}
            >
              <li key={toast.key}>
                {toast.icon}:{toast.content}
              </li>
            </CSSTransition>
            )
          })
        }
      </TransitionGroup>
    )
  }
}
let instance = null
export default {
  addNotice: function(icon, content, duration) {
    // ref用到组件上Toast
    if (instance) {
      return instance.addNotice(icon, content, duration)
    }
    let div = document.createElement('div') // div与#root同级
    document.body.appendChild(div)
    let objRef = React.createRef()
    ReactDom.render(<Toast ref={objRef}/>, div) // 获取这个组件的实例，调用组件上面的属性
    instance = objRef.current
    return objRef.current.addNotice(icon, content, duration) // 获取Toast的addNotice()方法
  }
};
