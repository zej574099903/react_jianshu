import React, { PureComponent } from "react";
//connet的作用就是与外部的Provide进行连接
import { connect } from "react-redux";
// 将actionCreators全量引入
// import { actionCreators } from "./store";
// 引入样式
import { LoginWrapper, LoginBox ,Input,Button} from "./style";

class Login extends PureComponent {
  render() {
    return (
      <LoginWrapper>
        <LoginBox>
            <Input placeholder="账号"></Input>
            <Input placeholder="密码"></Input>
            <Button>登录</Button>
        </LoginBox>
      </LoginWrapper>
    );
  }
}

// state--store内的state
const mapStateToProps = state => {};

// dispatch--调用store的方法，store.dispatch
const mapDispathToProps = dispatch => {};

export default connect(mapStateToProps, mapDispathToProps)(Login);
