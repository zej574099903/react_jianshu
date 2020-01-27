import React, { Component } from "react";
// 引入swiper插件
import ReactSwiper from "reactjs-swiper";
//引入样式
import { SwiperWrapper } from "../style";

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
}

export default Swiper;
