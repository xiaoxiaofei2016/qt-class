import React, { Component, Fragment } from 'react';
// Fragment无需向DOM添加额外的节点
import './style.css'
import XiaojiejieItem from './XiaojiejieItem.jsx'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

class Xiaojiejie extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      list: ['基础按摩', '退别']
    }
  }

  componentWillMount() { // 服务端和客户端都会有的生命周期
    console.log('1-componentWillMount')
  }
  componentDidMount() {
    console.log('3-componentDidMount')
  }
  componentWillUpdate() {

  }

  render() { 
    console.log('2-render')
    return ( 
        <Fragment>
          <div>
            <label htmlFor="input">增加服务</label>
            {/*  */}
            <input 
              id="input" 
              className="input" 
              type="text" 
              value={this.state.inputValue} 
              onChange={this.inputChange.bind(this)}
              ref={(input) => {this.input = input}}
              />
            <button onClick={this.addList.bind(this)}>增加服务</button>
          </div>
          <ul ref={(ul) => {this.ul = ul}}>
            <TransitionGroup>
              {
                this.state.list.map((item, index) => {
                  return (
                    <CSSTransition
                      in={this.state.show} // 如果this.state.show从false变为true，则动画入场，反之out出场
                      timeout={1000}
                      key={index + item}
                      classNames="fade"
                      unmountOnExit // 可选，当动画出场后在页面上移除包裹的dom节点
                      onEntered={(el) => {
                        el.style.color = 'blue'
                      }}
                    >
                      <XiaojiejieItem 
                      content={item} 
                      key={index + item} 
                      index={index} 
                      deleteItem={this.deleteItem.bind(this)}
                    />
                    </CSSTransition>
                  )
                })
              }
            </TransitionGroup>
          </ul>
        </Fragment>
     );
  }

  inputChange(e) {
    this.setState({
      inputValue: this.input.value
    })
  }
  addList() {
    this.setState({ // this.setState为异步
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    }, () => {
      console.log(this.ul.querySelectorAll('li').length)
    })
    // console.log(this.ul.querySelectorAll('li').length)
  }
  deleteItem(index) {
    let list = this.state.list.slice()
    list.splice(index, 1)
    this.setState({
      list: list
    })
  }
}
 
export default Xiaojiejie;