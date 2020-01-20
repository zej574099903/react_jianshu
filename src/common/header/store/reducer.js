// 引入type的常量
import { constants } from "./index";
// state的内容是不可修改的，为了防止被修改，可以引入immutable.js；它可以帮助我们解决这个问题
// fromJs可以把js对象转换成immutable对象
import { fromJS } from "immutable";

const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  list: [],
  page: 1,
  totalPage: 1
});

export default (state = defaultState, action) => {
  switch (action.type) {
    // 接受传过来的action.type;
    case constants.SEARCH_FOCUS:
      // 返回格式按immutable的格式
      // immutable对象的set方法，会结合之前immutable对象的值和设置的值，返回一个全新的对象；并非对原数据进行了修改
      return state.set("focused", true);
    case constants.SEARCH_BLUR:
      return state.set("focused", false);
    case constants.CHANGE_LIST:
      // return state.set("list", action.data).set("totalPage", action.totalPage);//第一种写法
      // 第二种写法见下
      return state.merge({
        list:action.data,
        totalPage:action.totalPage
      })
    case constants.MOUSE_ENTER:
      return state.set("mouseIn", true);
    case constants.MOUSE_LEAVE:
      return state.set("mouseIn", false);
    case constants.CHANGE_PAGE:
      return state.set("page", action.page);
    default:
      return state;
  }
};
