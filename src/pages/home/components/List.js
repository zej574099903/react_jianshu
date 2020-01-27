import React, { PureComponent } from "react";
//connet的作用就是与外部的Provide进行连接
import { connect } from "react-redux";
// 将actionCreators全量引入
// import { actionCreators } from "../store";
//引入样式
import { ListItem, ListInfo, LoadMore } from "../style";
// 将actionCreators全量引入
import { actionCreators } from "../store";
// 引入路由
import { Link } from "react-router-dom";

class List extends PureComponent {
  render() {
    const { list, getMoreList } = this.props;
    return (
      <div>
        {list.map((item, index) => {
          return (
            <Link key={index} to="/detail">
              <ListItem>
                <img alt="" className="pic" src={item.get("imageUrl")}></img>
                <ListInfo>
                  <h3 className="title">{item.get("title")}</h3>
                  <p className="desc">{item.get("desc")}</p>
                </ListInfo>
              </ListItem>
            </Link>
          );
        })}
        <LoadMore onClick={getMoreList}>阅读更多</LoadMore>
      </div>
    );
  }
}

// state--store内的state
const mapStateToProps = state => {
  return {
    list: state.getIn(["home", "acrticlList"])
  };
};

// dispatch--调用store的方法，store.dispatch
const mapDispathToProps = dispatch => {
  return {
    // 获取更多内容
    getMoreList() {
      dispatch(actionCreators.getMoreList());
    }
  };
};

export default connect(mapStateToProps, mapDispathToProps)(List);
