import React, { Component } from "react";
// 引入swiper插件
import ReactSwiper from "reactjs-swiper";
//connet的作用就是与外部的Provide进行连接
import { connect } from "react-redux";
//引入样式
import { SwiperWrapper } from "../style";
// 将actionCreators全量引入
import { actionCreators } from "../store";

// 定义轮播图功能
const swiperOptions = {
  preloadImages: true,
  autoplay: 4000,
  autoplayDisableOnInteraction: false
};
const items = [
  {
    image: require("../../../statics/imgs/please.jpg"),
    title: "请坐"
  },
  {
    image: require("../../../statics/imgs/productTeam.jpg"),
    title: "专业团队"
  },
  {
    image: require("../../../statics/imgs/yingming.jpg"),
    title: "英明"
  }
];
class Swiper extends Component {
  render() {
    return (
      <SwiperWrapper>
        <ReactSwiper
          swiperOptions={swiperOptions}
          showPagination
          items={items}
        />
      </SwiperWrapper>
    );
  }

  componentWillMount() {
    this.props.getBannerImgs();
  }
}

// state--store内的state
const mapStateToProps = state => {
  return {
    bannerList: state.getIn(["home", "bannerList"])
  };
};

// dispatch--调用store的方法，store.dispatch
const mapDispathToProps = dispatch => {
  return {
    // 获取轮播图内容
    getBannerImgs() {
      dispatch(actionCreators.getBannerImgs());
    }
  };
};

export default connect(mapStateToProps, mapDispathToProps)(Swiper);
