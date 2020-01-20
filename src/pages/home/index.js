import React, { Component } from "react";
// 引入Swiper,List,Recommend,Writer组件
import Swiper from "./components/Swiper";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Writer from "./components/Writer";
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
}

export default Home;
