import React from "react";
// 异步加载组件
import Loadable from "react-loadable";

const LoadableComponent = Loadable({
  loader: () => import("./"),
  loading() {
    return <div>正在加载</div>;
  }
});

export default () => <LoadableComponent />;
