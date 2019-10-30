import React, { Component } from 'react';

class Input extends Component {
  state = { // 静态属性
    value: ''
  }
  // 箭头函数 考虑到不改变this指向
  // 单向数据流
  // input 受控组件 完全受state.value 的控制
  handleChange = (event) => {
    const value = event.target.value;
    this.setState({
      value
    })
  }
  handleSubmit = () => {
    const { value } = this.state;
    const { onReceive } = this.props;
    // 回调 函数
    onReceive(value);
    console.log(value);
  }
  render() {
    const { value } = this.state;
    return (
      <>
        <input type="text" value={value} onChange={this.handleChange}/>
        <button onClick={this.handleSubmit}>submit</button>
      </>
    )
  }
}

class CommentList extends Component {
  render() {
  const { clist } = this.props; // 接收父组件的值
   return (
     <React.Fragment>
       {
         clist.map((list, index) => {
           return (
             <li key={index}>
               { list.content }
             </li>
           )
         })
       }
     </React.Fragment>
   )
  }
}

class Comment extends Component {
  state = {
    clist: [
      { content: '666' }
    ] // 评论列表
  }
  handleReceiveComment = (value) => {
    console.log('value', value);
    // 不可变数据
    // this.state.clist.push({content: value})
    let clist = this.state.clist.slice(0);
    clist.push({ content: value }) // 不改变原来的clist 浅拷贝一份clist
    this.setState({
      clist
    })
  }
  render() {
    const { clist } = this.state;
    return (
      <>
        <Input onReceive={this.handleReceiveComment}/>
        <CommentList clist={clist}/>
      </>
    )
  }
}
export default Comment;