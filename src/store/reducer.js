// combineReducers--将一些小的reducer合并成一个大的reducer;
// 通过从redux-immutable获取的combineReducers是一个immutable格式；不会被修改
import { combineReducers } from "redux-immutable";
// as是起别名的意思，意思是reducer起了个别名叫  header: headerReducer
import { reducer as headerReducer } from "../common/header/store";
import { reducer as homeReducer } from "../pages/home/store";
import { reducer as detailReducer } from "../pages/detail/store";

const reducer = combineReducers({
  header: headerReducer,
  home: homeReducer,
  detail: detailReducer
});

export default reducer;
