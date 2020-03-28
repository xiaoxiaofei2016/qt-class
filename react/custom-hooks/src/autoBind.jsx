import React, { Component } from 'react';
class AutoBind extends Component {
  render() {
    const { ctx, vmodel } = this.props
    return (
      <>
        {
          React.cloneElement(
            this.props.children,
            {
              value: ctx.state[vmodel] || '', // 如果当前的状态是 undefined 那么组件的值是空字符串
              onChange: (e) => {
                ctx.setState({
                  [vmodel]: e.target.value // vmodel动态的值，用[]
                })
              }
            }
          )
        }
      </>
    )
  }
}
export default AutoBind;