import React from "react";
// 引入全局样式
import { Globalstyle } from "./style";
// 引入全局iconfont样式
import { GlobalIconfontStyle } from "./statics/iconfont/iconfont";
// 引入Provider组件，主要是为子组件和store做一个中间传值的功能
import { Provider } from "react-redux";
// 引入头部组件
import Header from "./common/header";
// 将store引入
import store from "./store";

function App() {
  return (
    <div>
      <Globalstyle />
      <GlobalIconfontStyle />
      <Provider store={store}>
        <Header />
      </Provider>
    </div>
  );
}

export default App;
