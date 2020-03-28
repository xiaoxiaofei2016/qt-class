import React, { Component, useState } from 'react';
import AutoBind from './autoBind.jsx';
// 所有自定义的 hooks 都以 use 开头
// hooks 只能在 函数组件内部

function useFormInput(val) {
  const [value, setValue] = useState(val)
  const onChange = function(e) {
    setValue(e.target.value)
  }
  return {
    value,
    onChange
  }
}

function Input2() {
  const userName = useFormInput('default')
  return (
    <input type="text" {...userName}/>
  )
}

class Input1 extends Component {
  state = {
    val1: ''
  }
  handleVal1 = (e) => {
    this.setState({
      val1: e.target.value
    })
  }
  render() {
    const { val1 } = this.state
    // state -> value -> change -> state
    return (
      <div>
        <input type="text" value={val1} onChange={this.handleVal1}/>
        <AutoBind vmodel="val2" ctx={this}>
          <input type="text"/>
        </AutoBind>
        <Input2/>
      </div>
    )
  }
}
// React.createElement('div', {})
export default Input1;