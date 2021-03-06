// 引入type的常量
import { constants } from "./index";
import axios from "axios";
import { fromJS } from "immutable";

const getBanners = data => ({
  type: constants.GET_BANNERS,
  // 需要将传过去的data转换成immutable格式
  data: fromJS(data)
});

const getArticle = data => ({
  type: constants.GET_ARTICLE,
  // 需要将传过去的data转换成immutable格式
  data: fromJS(data)
});

const getMore = data => ({
  type: constants.GET_MORE,
  // 需要将传过去的data转换成immutable格式
  data: fromJS(data)
});

const getRecommend = data => ({
  type: constants.GET_RECOMMEND,
  // 需要将传过去的data转换成immutable格式
  data: fromJS(data)
});


// 定义异步函数
// 获取banner图
export const getBannerImgs = () => {
  return dispatch => {
    axios
      .get("/api/home/banner.json")
      .then(res => {
        const data = res.data.data;
        dispatch(getBanners(data));
      })
      .catch(() => {});
  };
};
// 获取文章列表
export const getArticleList = () => {
  return dispatch => {
    axios
      .get("/api/home/acrticl.json")
      .then(res => {
        const data = res.data.data;
        dispatch(getArticle(data));
      })
      .catch(() => {});
  };
};
// 获取更多内容
export const getMoreList = () => {
  return dispatch => {
    axios
      .get("/api/home/acrticlMore.json")
      .then(res => {
        const data = res.data.data;
        dispatch(getMore(data));
      })
      .catch(() => {});
  };
};
// 获取推荐列表
export const getRecommendList = () => {
  return dispatch => {
    axios
      .get("/api/home/recommend.json")
      .then(res => {
        const data = res.data.data;
        dispatch(getRecommend(data));
      })
      .catch(() => {});
  };
};
//判断是否显示回到顶部
export const changeShowToTop = (show) =>({
  type: constants.CHANGE_SHOWTOTOP,
  show
})
