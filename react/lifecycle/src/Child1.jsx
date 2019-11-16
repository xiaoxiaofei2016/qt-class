import React, { Component } from 'react'
class Child1 extends Component {
  state = {
    data: 1
  }
  componentWillMount() {
    console.log('componentWillMount')
    const { list } = this.props
    this.setState({
      list
    })
  }
  componentDidMount() {
    console.log('componentDidMount')
    this.interVal = setInterval(() => {
      console.log(1234)
      let list = this.state.list.slice(0)
      list.push(4)
      this.setState({
        list
      })
    }, 1000);
  }
  update = () => {
    this.setState({
      data: this.state.data + 1
    })
  }
  componentWillReceiveProps(nextProps) {
    console.log(nextProps, 'componentWillReceiveProps', this.props)
    // this.props上一次的
    let list = this.state.list.slice(0)
    list.splice(0, 3, ...(nextProps.list))
    this.setState({
      list
    })
  }
  shouldComponentUpdate(nextProps, nextState) { // 性能优化
    console.log(nextProps, nextState)
    // if (this.state.data < 3) {
    //   return false
    // }
    return true
  }
  componentWillUnmount() {
    // 清理操作
    // 定时器 全局绑定的方法
    clearInterval(this.interVal)
  }
  render() {
    return (
    <div onClick={this.update}>child1：{this.state.data}
      <ul>
        {
          this.state.list.map(el => {
            return (
              <li>{el}</li>
            )
          })
        }
      </ul>
    </div>
    )
  }
}
export default Child1;
