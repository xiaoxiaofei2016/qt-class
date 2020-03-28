import React from 'react';
import './App.css';
// 1.h5:history  2.hash change
import { BrowserRouter, HashRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import BaseComponent from './lib/BaseComponent.jsx';
import store from './store/index.jsx';
import Home from './pages/home/index.jsx';
import Header from './common/header/index.jsx';
import { GlobalStyle } from './statics/iconfont/iconfont.js'
import PrivateRoute from './lib/PrivateRoute.jsx'
// Provider 其实就只是一个外层容器，它的作用就是通过配合 connect 来达到跨层级传递数据。
import Login from './pages/login/index.jsx'
function Write() {
  return (
    <div>
      写文章
    </div>
  )
}

class App extends BaseComponent {
  render() {
    return (
      <Provider store={store}>
        {/* BrowserRouter保存了全局的路由信息 */}
        <BrowserRouter>
          <div>
            <GlobalStyle/>
            <Header></Header>
            <Route exact path="/" component={Home}/>
            <Route path="/login" component={Login}/>
            {/* <PrivateRoute path="/write" Com={Write}></PrivateRoute> */}
            <PrivateRoute path="/write">
              <Write/>
            </PrivateRoute>
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App;
