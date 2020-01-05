import React from "react";
import "./blod.scss";
function blod() {
  let li = [];
  for (var i = 0; i < 2; i++) {
    li.push(
      <li key={i}>
        <div className="prodimg">
          <img src={require("../../assets/img/2910471.jpg")} alt="" />
        </div>
        <div className="blod_cent">
          <span>lol动画平台</span>
          <i></i>
        </div>
        <div className="blod_avater">
          <div className="blod_message">
            <img src={require("../../assets/img/1001779.jpg")} alt="" />
            <span>小囖咯</span>
            <em></em>
            <em></em>
          </div>
          <p>11点赞·22评论·2分钟前</p>
        </div>
      </li>
    );
  }
  // eslint-disable-next-line react/react-in-jsx-scope
return <ul className="blod">{li}</ul>;
}

export default blod;
