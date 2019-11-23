import React from 'react';
import './App.css';
// 1.h5:history  2.hash change
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import BaseComponent from './lib/BaseComponent.jsx';
import store from './store/index.jsx';
import Home from './pages/home/index.jsx';

class App extends BaseComponent {
  render() {
    return (
      <Provider store={store}>
        {/* BrowserRouter保存了全局的路由信息 */}
        <BrowserRouter>
          <div>
            header
            <Route exact path="/" component={Home}/>
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App;
