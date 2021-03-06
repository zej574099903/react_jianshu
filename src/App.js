import React from "react";
// 引入全局样式
import { Globalstyle } from "./style";
// 引入全局iconfont样式
import { GlobalIconfontStyle } from "./statics/iconfont/iconfont";
// 引入Provider组件，主要是为子组件和store做一个中间传值的功能
import { Provider } from "react-redux";
// 引入路由
import { BrowserRouter, Route } from "react-router-dom";
// 引入头部组件
import Header from "./common/header";
//引入Login组件
import Login from "./pages/login";
// 引入Home组件
import Home from "./pages/home";
//引入Detail组件
import Detail from "./pages/detail/loadable";
// 将store引入
import store from "./store";

function App() {
  return (
    <div>
      <Globalstyle />
      <GlobalIconfontStyle />
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Header />
            {/* exact--精确匹配 */}
            <Route path="/" exact component={Home}></Route>
            <Route path="/login" exact component={Login}></Route>
            <Route path="/detail/:id" exact component={Detail}></Route>
          </div>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
