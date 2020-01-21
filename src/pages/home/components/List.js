import React, { Component } from "react";
//connet的作用就是与外部的Provide进行连接
import { connect } from "react-redux";
// 将actionCreators全量引入
// import { actionCreators } from "../store";
//引入样式
import { ListItem, ListInfo } from "../style";

class List extends Component {
  render() {
    const { list } = this.props;
    return (
      <div>
        {list.map(item => {
          return (
            <ListItem key={item.get('id')}>
              <img
                className="pic"
                src={item.get('imageUrl')}
              ></img>
              <ListInfo>
                <h3 className="title">
                  {item.get('title')}
                </h3>
                <p className="desc">
                  {item.get('desc')}
                </p>
              </ListInfo>
            </ListItem>
          );
        })}
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
  return {};
};

export default connect(mapStateToProps, mapDispathToProps)(List);
