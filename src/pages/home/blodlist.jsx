import React from "react";
import "./blod.scss";
function blod() {
  let li = [];
  for (var i = 0; i < 3; i++) {
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
return<div className="blod_box">
   <header className="header">
      <ul className="header-tab">
        <li className="active">全部</li>
        <li>关注</li>
        <li>最新</li>
        <li>最佳分享</li>
      </ul>
      <div className="header-icon">
        <span className="iconfont icon-search"></span>|
        <span className="iconfont icon-qrcode"></span>
      </div>
    </header>
    <ul className="blod">{li}</ul>
</div> ;
}

export default blod;
