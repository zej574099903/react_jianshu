// 引入type的常量
import { constants } from "./index";
// state的内容是不可修改的，为了防止被修改，可以引入immutable.js；它可以帮助我们解决这个问题
// fromJs可以把js对象转换成immutable对象
import { fromJS } from "immutable";

const defaultState = fromJS({
  bannerList: [],
  acrticlList: [],
  recomendList: [],
  showToTop: false
});

export default (state = defaultState, action) => {
  switch (action.type) {
    // 接受传过来的action.type;
    case constants.GET_BANNERS:
      // 返回格式按immutable的格式
      // immutable对象的set方法，会结合之前immutable对象的值和设置的值，返回一个全新的对象；并非对原数据进行了修改
      return state.set("bannerList", action.data);
    case constants.GET_ARTICLE:
      return state.set("acrticlList", action.data);
    case constants.GET_MORE:
      return state.set(
        "acrticlList",
        state.get("acrticlList").concat(action.data)
      );
    case constants.GET_RECOMMEND:
      return state.set("recomendList", action.data);
    case constants.CHANGE_SHOWTOTOP:
      return state.set("showToTop", action.show);
    default:
      return state;
  }
};
