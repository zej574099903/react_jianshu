// 引入type的常量
import { constants } from "./index";
import axios from "axios";
import { fromJS } from "immutable";

const changeList = data => ({
  type: constants.CHANGE_LIST,
  // 需要将传过去的data转换成immutable格式
  data: fromJS(data),
  // 定义总页数并取整数
  totalPage: Math.ceil(data.length / 10)
});

// 定义的action方法
export const searchFocus = () => ({
  type: constants.SEARCH_FOCUS
});

export const searchBlur = () => ({
  type: constants.SEARCH_BLUR
});

export const mouseEnter = () => ({
  type: constants.MOUSE_ENTER
});

export const mouseLeave = () => ({
  type: constants.MOUSE_LEAVE
});

export const changePage = page => ({
  type: constants.CHANGE_PAGE,
  page
});

// 定义异步函数
export const getList = () => {
  return dispatch => {
    axios
      .get("/api/headerList.json")
      .then(res => {
        const data = res.data.data;
        dispatch(changeList(data));
      })
      .catch(() => {});
  };
};
