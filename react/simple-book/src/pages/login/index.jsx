import React, { Component } from 'react';
import { LoginWrapper, LoginBox, Input, Button } from './style'
import * as actionCreator from './store/actioncreate'
import { connect } from 'react-redux'
class Login extends Component {
  state = {  }
  userName = React.createRef()
  passWord = React.createRef()
  render() { 
    return ( 
      <LoginWrapper>
        <LoginBox>
          <Input placeholder="账号" ref={this.userName}/>
          <Input placeholder="密码" type="password" ref={this.passWord}/>
          <Button onClick={() => {
            console.log(this.userName.current.value)
            this.props.login()
          }}>登录</Button>
        </LoginBox>
      </LoginWrapper>
     );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login() {
      dispatch(actionCreator.changeLoginStatus(true))
    }
  }
}
export default connect(null, mapDispatchToProps)(Login);