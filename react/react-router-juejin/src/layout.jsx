import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
let isLogin = true

function PriCom() {
  return (
    <div>
      私密信息
    </div>
  )
}
class PrivateRoute extends Component {
  render() {
    const props = this.props
    return (
      <div>
        {
          isLogin ? <Route {...props}/> : null  // props: path component
        }
      </div>
    )
  }
}
function guanzhu() {
  return (
    <div>
      guanzhu
    </div>
  )
}
function fe() {
  return (
    <div>
      fe
    </div>
  )
}
function rd() {
  return (
    <div>
      rd
    </div>
  )
}

function Home() {
  return (
    <div>Home
      <div>
        <Link to="/home">首页</Link>
        <Link to="/home/guanzhu">关注</Link>
        <Link to="/home/fe">前端</Link>
        <Link to="/home/rd">后端</Link>
        <Link to="/home/private">私密</Link>
      </div>
      <div className="main">
        <Route path="/home/guanzhu" component={guanzhu} />
        <Route path="/home/fe" component={fe} />
        <Route path="/home/rd" component={rd} />
        <PrivateRoute path="/home/private" component={ PriCom } />
      </div>
    </div>
  )
}
function Me() {
  return (
    <div>me</div>
  )
}
class Layout extends Component {
  render() {
    return (
      <div>
        <div className="main">
          <Route path="/home" component={ Home } />
          { isLogin && <Route path="/me" component={ Me } />}
        </div>
        <div className="footer">
          <Link to="/home">home</Link>
          { isLogin && <Link to="/me">me</Link>} {/* 登录了才出来 */}
        </div>
      </div>
    )
  }
}
export default Layout
