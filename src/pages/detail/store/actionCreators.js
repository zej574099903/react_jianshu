// 引入type的常量
import { constants } from "./index";
import axios from "axios";

const getInfo = (title,content) => ({
  type: constants.GET_INFO,
  title,
  content
});



// 定义异步函数
// 获取banner图
export const getDetails = () => {
  return dispatch => {
    axios
      .get("/api/detail/details.json")
      .then(res => {
        const data = res.data.data;
        dispatch(getInfo(data.title,data.content));
      })
      .catch(() => {});
  };
};