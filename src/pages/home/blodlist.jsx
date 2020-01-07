import React, { useState } from "react";
import { Switch, Route, NavLink, withRouter } from "react-router-dom";
import "./blod.scss";
function Blod() {
  let [flag, setFlag] = useState(false)
  let li = [];
  for (var i =
    0; i < 3; i++) {
    li.push(
      <li key={i}>
        <div className="prodimg">
          <img src={require("../../assets/img/2910471.jpg")} alt="" />
        </div>
        <div className="blod_cent">
          <span>lol动画平台奥斯卡登记卡时间的</span>
          <i></i>
        </div>
        {!flag ? <div className="blod_avater">
          <div className="blod_message">
            <img src={require("../../assets/img/1001779.jpg")} alt="" />
            <span>小囖咯</span>
            <em></em>
            <em></em>
          </div>
          <p>11点赞·22评论·2分钟前</p>
        </div> : <div className="blod_avater">
            <div className="blod_avater_top">
              <p>11点赞·22评论</p>
              <span>#原创#</span>
            </div>
            <div className="blod_avater_foot">
              <div className="blod_message">
                <img src={require("../../assets/img/1001779.jpg")} alt="" />
                <span>小囖咯</span>
              </div>
              <span>1分钟</span>
            </div>

          </div>}


      </li>
    );
  }
  let activeFlag = ()=>{
    setFlag(!flag)
  };
  // console.log(listFlag)
  return (<div className="blod_box">
    <header className="header">
      <nav className="header-tab">
        <NavLink className="Navlink " exact to="/home/1" activeclassName='active'>全部</NavLink>
        <NavLink className="Navlink " exact to="/home/2" activeclassName='active'>关注</NavLink>
        <NavLink className="Navlink " exact to="/home/3" activeclassName='active'>最新</NavLink>
        <NavLink className="Navlink " exact to="/home/4" activeclassName='active'>最佳分享</NavLink>
      </nav>
      <div className="header-icon">
        <span className="iconfont icon-search"></span>|
      <span className={ flag ? 'iconfont icon-manage' :'iconfont icon-qrcode'} onClick={activeFlag}></span>
      </div>
    </header>
    <div className="blod-list">
      <ul className={ flag ? 'activeBlog': 'blod' }>{li}</ul>
    </div>
  </div>)
}

export default withRouter(Blod);
