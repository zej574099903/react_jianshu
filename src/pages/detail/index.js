import React, { Component } from "react";
//connet的作用就是与外部的Provide进行连接
import { connect } from "react-redux";
// 将actionCreators全量引入
import { actionCreators } from "./store";
// 引入样式
import { DetailWrapper, Header, Content } from "./style";

class Detail extends Component {
  render() {
    return (
      <DetailWrapper>
        <Header>
          {this.props.title}
        </Header>
        {/*dangerouslySetInnerHTML--原格式输出  */}
        <Content dangerouslySetInnerHTML={{__html:this.props.content}}>
        </Content>
      </DetailWrapper>
    );
  }

  componentDidMount() {
    this.props.getDetails();
  }
}

// state--store内的state
const mapStateToProps = state => {
  return {
    title: state.getIn(["detail", "title"]),
    content: state.getIn(["detail", "content"]),
  };
};

// dispatch--调用store的方法，store.dispatch
const mapDispathToProps = dispatch => {
  return {
    // 获取详情内容
    getDetails() {
      dispatch(actionCreators.getDetails());
    }
  };
};

export default connect(mapStateToProps, mapDispathToProps)(Detail);
