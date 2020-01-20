// 引入type的常量
import { constants } from "./index";
import axios from "axios";
import { fromJS } from "immutable";

const getBanners = data => ({
  type: constants.GET_BANNERS,
  // 需要将传过去的data转换成immutable格式
  data: fromJS(data),
});


// 定义异步函数
export const getBannerImgs = () => {
  return dispatch => {
    axios
      .get("/api/home/banner.json")
      .then(res => {

        const data = res.data.data
        dispatch(getBanners(data));
      })
      .catch(() => {});
  };
};
