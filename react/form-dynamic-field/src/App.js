import React from 'react';
import logo from './logo.svg';
import './App.css';

class DynamicFidle extends React.Component {
  handleAdd = () => {
    this.props.onAdd()
  }
  handleSub = (i) => {
    this.props.onSub(i)
  }
  render() {
    const { rule } = this.props
    return (
      <>
        <label>
          规则
        </label>
        {
          rule.map((proRule, i) => {
            return (
              <div key={i}>
                {/* 受控组件 */}
                <label >
                  姓名
                </label>
                <input type="text" 
                  value={proRule.name} 
                  data-key="name" 
                  data-index={i}
                  onChange={(event) => {
                  this.props.onFiledChange(event)
                }}/>
                <label>
                  年龄
                </label>
                <input type="text" 
                  value={proRule.age} 
                  data-key="age" 
                  data-index={i}
                  onChange={this.props.onFiledChange} />
                <button data-i={i} onClick={
                  () => {
                    this.handleSub(i)
                  }
                }>-</button>
              </div>
            )
          })
        }
        <br />
        <button onClick={this.handleAdd}>+</button>
      </>
    )
  }
}

class App extends React.Component {
  state = {
    date: '',
    rule: [
      { name: '', age: '' }
    ]
  }
  handleAdd = () => {
    let rule = this.state.rule.slice(0)
    rule.push({ name: '', age: '' })
    this.setState({
      rule
    })
  }
  handleSub = (i) => {
    let rule = this.state.rule.slice(0)
    rule.splice(i, 1)
    this.setState({
      rule
    })
    console.log(i, '删除的下标')
  }
  handleChange = (event) => {
    const key = event.target.dataset.key
    const index = event.target.dataset.index
    const value = event.target.value
    let rule = this.state.rule.slice(0)
    rule[parseInt(index)][key] = value
    this.setState({
      rule
    })
    console.log(index, '改变的下标')
  }
  render() {
    const { rule } = this.state
    return (
      <div>
        <label htmlFor="date">
          日期
        </label>
        <input type="date" id="date" />
        <br />
        <DynamicFidle rule={rule} 
          onAdd={this.handleAdd} 
          onSub={this.handleSub} 
          onFiledChange={this.handleChange}/>
      </div>
    )
  }
}

export default App;
