import React, { Component } from "react";
// 引入Swiper,List,Recommend,Writer组件
import Swiper from "./components/Swiper";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Writer from "./components/Writer";
//connet的作用就是与外部的Provide进行连接
import { connect } from "react-redux";
// 将actionCreators全量引入
import { actionCreators } from "./store";
// 引入首页样式
import { HomeWrapper, HomeLeft, HomeRight } from "./style";

class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <Swiper></Swiper>
          <List></List>
        </HomeLeft>
        <HomeRight>
          <Recommend></Recommend>
          <Writer></Writer>
        </HomeRight>
      </HomeWrapper>
    );
  }
  componentDidMount() {
    this.props.getBannerImgs();
    this.props.getArticleList();
    this.props.getRecommendList();
  }
}

// dispatch--调用store的方法，store.dispatch
const mapDispathToProps = dispatch => {
  return {
    // 获取轮播图内容
    getBannerImgs() {
      dispatch(actionCreators.getBannerImgs());
    },
    // 获取文章列表
    getArticleList() {
      dispatch(actionCreators.getArticleList());
    },
    //获取推荐列表
    getRecommendList() {
      dispatch(actionCreators.getRecommendList());
    }
  };
};

export default connect(null, mapDispathToProps)(Home);
