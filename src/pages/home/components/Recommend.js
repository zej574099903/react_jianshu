import React, { PureComponent } from "react";
//connet的作用就是与外部的Provide进行连接
import { connect } from "react-redux";
//引入样式
import { RecommendWrapper, RecommendItem } from "../style";

class Recommend extends PureComponent {
  render() {
    const { list } = this.props;
    return (
      <RecommendWrapper>
        {list.map(item => {
          return (
            <RecommendItem key={item.get("id")} imgUrl={item.get("imgUrl")} />
          );
        })}
      </RecommendWrapper>
    );
  }
}

// state--store内的state
const mapStateToProps = state => {
  return {
    list: state.getIn(["home", "recomendList"])
  };
};


export default connect(mapStateToProps, null)(Recommend);
