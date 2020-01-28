import React, { PureComponent } from "react";
//connet的作用就是与外部的Provide进行连接
import { connect } from "react-redux";
//引入withRouter
import { withRouter } from "react-router-dom";
// 将actionCreators全量引入
import { actionCreators } from "./store";
// 引入样式
import { DetailWrapper, Header, Content } from "./style";

class Detail extends PureComponent {
  render() {
    // 获取到路由传过来的id
    // console.log(this.props.match.params.id)
    return (
      <DetailWrapper>
        <Header>{this.props.title}</Header>
        {/*dangerouslySetInnerHTML--原格式输出  */}
        <Content
          dangerouslySetInnerHTML={{ __html: this.props.content }}
        ></Content>
      </DetailWrapper>
    );
  }

  componentDidMount() {
    this.props.getDetails(this.props.match.params.id);
  }
}

// state--store内的state
const mapStateToProps = state => {
  return {
    title: state.getIn(["detail", "title"]),
    content: state.getIn(["detail", "content"])
  };
};

// dispatch--调用store的方法，store.dispatch
const mapDispathToProps = dispatch => {
  return {
    // 获取详情内容
    getDetails(id) {
      dispatch(actionCreators.getDetails(id));
    }
  };
};

export default connect(mapStateToProps, mapDispathToProps)(withRouter(Detail));
