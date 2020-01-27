import React, { Component } from "react";
//connet的作用就是与外部的Provide进行连接
import { connect } from "react-redux";
//引入第三方动画组件
// in---动画时机
//timeout--动画时长
//classNames--动画类
import { CSSTransition } from "react-transition-group";
// 引入路由
import { Link } from "react-router-dom";
// 将actionCreators全量引入
import { actionCreators } from "./store";
// 引入头部组件样式
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  NavSearch,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem,
  Addition,
  Button
} from "./style";

class Header extends Component {
  // 获取焦点时显示下面内容
  getListArea() {
    const {
      focused,
      mouseIn,
      list,
      page,
      totalPage,
      handelMouseEnter,
      handelMouseLeave,
      handleChangePage
    } = this.props;
    // 将list转换成js对象
    const newList = list.toJS();
    const pageList = [];
    for (let i = (page - 1) * 10; i < page * 10; i++) {
      pageList.push(<SearchInfoItem key={i}>{newList[i]}</SearchInfoItem>);
    }
    if (focused || mouseIn) {
      return (
        <SearchInfo
          onMouseEnter={handelMouseEnter}
          onMouseLeave={handelMouseLeave}
        >
          <SearchInfoTitle>
            热门搜索
            {/* 如果要传参数必须使用回掉函数，否则会有事件冒泡 */}
            <SearchInfoSwitch
              onClick={() => handleChangePage(page, totalPage, this.spinIcon)}
            >
              {/* 可以通过ref获取到dom的节点，并赋值给this.spinIcon,通过事件改变其属性进行动画旋转 */}
              <i
                ref={icon => {
                  this.spinIcon = icon;
                }}
                className="iconfont spin"
              >
                &#xe851;
              </i>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <div>
            <SearchInfoList>{pageList}</SearchInfoList>
          </div>
        </SearchInfo>
      );
    } else {
      return null;
    }
  }

  render() {
    const { focused, handleInputFocus, handleInputBlur, list } = this.props;
    return (
      <HeaderWrapper>
        <Link to="/">
          <Logo />
        </Link>
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <NavItem className="right">登录</NavItem>
          <NavItem className="right">
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition in={focused} timeout={200} classNames="slide">
              <NavSearch
                className={focused ? "focesed" : ""}
                onFocus={() => handleInputFocus(list)}
                onBlur={handleInputBlur}
              ></NavSearch>
            </CSSTransition>
            <i
              className={
                focused ? "focesed iconfont searchIcon" : "iconfont searchIcon"
              }
            >
              &#xe617;
            </i>
            {this.getListArea()}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className="writting">
            <i className="iconfont">&#xe6e5;</i>写文章
          </Button>
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper>
    );
  }
}

// state--store内的state
const mapStateToProps = state => {
  return {
    // 将store内的focused映射到组件的props中
    // immutable对象需要通过get()的方式获取
    // focused: state.get('header').get('focused')--第一种写法
    focused: state.getIn(["header", "focused"]), //--第二种写法
    list: state.getIn(["header", "list"]),
    page: state.getIn(["header", "page"]),
    totalPage: state.getIn(["header", "totalPage"]),
    mouseIn: state.getIn(["header", "mouseIn"])
  };
};

// dispatch--调用store的方法，store.dispatch
const mapDispathToProps = dispatch => {
  return {
    // 获取焦点时改变state内的focused的状态
    handleInputFocus(list) {
      console.log(list);
      // 使用了redux-thunk后可以进行dispatch异步函数
      if (list.size === 0) {
        dispatch(actionCreators.getList());
      }
      dispatch(actionCreators.searchFocus());
    },
    //失去焦点时改变state内的focused的状态
    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    },
    // 鼠标移入时的事件
    handelMouseEnter() {
      dispatch(actionCreators.mouseEnter());
    },
    // 鼠标移出的事件
    handelMouseLeave() {
      dispatch(actionCreators.mouseLeave());
    },
    //点击换一批
    handleChangePage(page, totalPage, spinIcon) {
      if (page < totalPage) {
        dispatch(actionCreators.changePage(page + 1));
      } else {
        dispatch(actionCreators.changePage(1));
      }
      // spinIcon.style可以获取到节点的css样式
      // 把字符串中不是0-9的数字都替换成空就能获取到deg;
      let rotateNum = spinIcon.style.transform.replace(/[^0-9]/gi, "");
      if (rotateNum) {
        rotateNum = Number(rotateNum);
      } else {
        rotateNum = 0;
      }
      spinIcon.style.transform = `rotate(${rotateNum + 360}deg)`;
    }
  };
};
export default connect(mapStateToProps, mapDispathToProps)(Header);
