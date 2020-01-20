import React, { Component } from "react";
// 引入首页样式
import { HomeWrapper, HomeLeft, HomeRight } from "./style";

class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img
            className="banner_img"
            src={require("../../statics/imgs/productTeam.jpg")}
            alt="图片无法显示"
          />
        </HomeLeft>
        <HomeRight>right</HomeRight>
      </HomeWrapper>
    );
  }
}

export default Home;
