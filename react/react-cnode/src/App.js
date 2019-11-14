import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css'
import { Layout, Menu, Breadcrumb } from 'antd';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Home.jsx'
import Topic from './Topic.jsx'
const { Header, Content, Footer } = Layout;
class App extends React.Component {
  render() {
    return (
      <Router>
        <Layout className="layout">
          <Header>
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1">nav 1</Menu.Item>
              <Menu.Item key="2">nav 2</Menu.Item>
              <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: '0 50px' }}>
            {/* 路由router-view */}
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/topic">
              <Topic />
            </Route>
            <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>Content</div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design 2018 Created by Ant UED</Footer>
        </Layout>
      </Router>
    )
  }
}

export default App;
