// 引入type的常量
import { constants } from "./index";
// state的内容是不可修改的，为了防止被修改，可以引入immutable.js；它可以帮助我们解决这个问题
// fromJs可以把js对象转换成immutable对象
import { fromJS } from "immutable";

const defaultState = fromJS({
  bannerList: [],
  acrticlList: [
    {
      id: 1,
      title: "遇到什么样的男人可以恋爱？遇到什么样的男人可以结婚",
      desc:
        "你好！ 恋爱是对爱的向往，结婚是对家和归宿的向往。这两者之间因为年龄和目的不一样而不一样。 恋爱时尽显浪漫 恋爱的时候，男女之间的吸引更多是建立..",
      imageUrl:
        "//upload-images.jianshu.io/upload_images/12171538-2a78dcea58cc3f45?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
    },
    {
      id: 2,
      title: "人生没有太晚的开始，只有不开始",
      desc:
        "文/麦大人 01 最近遇到一些读者发私信给我说，很喜欢我的文字。他们自己也喜欢阅读，想把业余时间利用起来，尝试拿来写作。 但不知道现在还来得及吧...",
      imageUrl:
        "//upload-images.jianshu.io/upload_images/2259045-a4bd43256a81a9ba.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
    },
    {
      id: 3,
      title: "硅谷名师，带你4个月零基础入门AI",
      desc: "小班辅导，一站式掌握AI红利！立抢限量席位！",
      imageUrl:
        "//upload-images.jianshu.io/upload_images/16061987-6df0bf7e90165256.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
    },
    {
      id: 4,
      title: "年底了，你存了多少钱”：越过越穷的人，都有这3种习惯",
      desc:
        "昨天，很久不联系的同学发来微信：“在吗？给我的第一条朋友圈点赞。”点进去一看，果不其然，又是“集齐6个好友，省下5块钱”之类。 曾经加入一个",
      imageUrl:
        "//upload-images.jianshu.io/upload_images/4872563-282f75ff44e5ccc6?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
    }
  ]
});

export default (state = defaultState, action) => {
  switch (action.type) {
    // 接受传过来的action.type;
    case constants.GET_BANNERS:
      // 返回格式按immutable的格式
      // immutable对象的set方法，会结合之前immutable对象的值和设置的值，返回一个全新的对象；并非对原数据进行了修改
      return state.set("bannerList", action.data);
    default:
      return state;
  }
};
