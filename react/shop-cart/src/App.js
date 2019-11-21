import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux' // 高阶组件

class App extends React.Component {
  handleCheck = (e, i) => {
    const checked = e.target.checked
    this.props.checked(checked, i) // dispatch
  }
  render() {
    const { shopCart } = this.props
    console.log(shopCart, 'shopCart')
    return (
      <div>
        {
          shopCart.map((good, i) => {
            return (
              <div key={i}>
                {/* <label htmlFor={i}>{good.name}</label> */}
                <input type="checkbox" checked={good.checked} onChange={(e) => {
                  this.handleCheck(e, i)
                }}/>
                <label>
                  {good.name}/RMB:{good.price}
                </label>
                <button >-</button>
                {good.count}
                <button>+</button>
              </div>
            )
          })
        }
      </div>
    )
  }
}
const mapStateToProps = (state) => { // 映射，把需要的数据过滤出来
  return {
    shopCart: state.shopCart
  }
}
const mapDispatchToProps = (dispatch) => { // 定义dispatch
  return {
    checked(checked, i) {
      dispatchEvent({
        type: 'TOGGLE_CHECKED',
        checked,
        index: i
      })
    } 
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
