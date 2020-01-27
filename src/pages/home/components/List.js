import React, { Component } from "react";
//connet的作用就是与外部的Provide进行连接
import { connect } from "react-redux";
// 将actionCreators全量引入
// import { actionCreators } from "../store";
//引入样式
import { ListItem, ListInfo, LoadMore } from "../style";
// 将actionCreators全量引入
import { actionCreators } from "../store";

class List extends Component {
  render() {
    const { list, getMoreList } = this.props;
    return (
      <div>
        {list.map((item, index) => {
          return (
            <ListItem key={index}>
              <img alt="" className="pic" src={item.get("imageUrl")}></img>
              <ListInfo>
                <h3 className="title">{item.get("title")}</h3>
                <p className="desc">{item.get("desc")}</p>
              </ListInfo>
            </ListItem>
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
