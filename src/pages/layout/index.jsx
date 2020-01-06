import React, { useState } from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import "./index.scss";
import blod from "../home/blodlist";
function Footer() {
  let active = {
    color: '#057bfd',
  }
  // console.log(this.props.match)
  return <footer className="footer">
    <nav>
      <NavLink className="nav-limk" to="/home" activeStyle={active}>
        <i className="iconfont icon-faxian"></i>
        <span>发现</span>
      </NavLink>
      <NavLink className="nav-limk" to="/experience" activeStyle={active}>
        <i className="iconfont icon-book"></i>
        <span>经验</span>
      </NavLink>
      <NavLink className="nav-limk" to="/inspiration" activeStyle={active}>
        <i className="iconfont icon-quanzi"></i>
        <span>灵感</span>
      </NavLink>
      <NavLink className="nav-limk" to="/news" activeStyle={active}>
        <i className="iconfont icon-shouye"></i>
        <span>消息</span>
      </NavLink>
      <NavLink className="nav-limk" to="/mine" activeStyle={active}>
        <i className="iconfont icon-changyongtubiao-xianxingdaochu-zhuanqu-"></i>
        <span>我的</span>
      </NavLink>
    </nav>
  </footer>;
}
function Main() {
  return (
    <main>
      <Switch>
        <Route path="/home" component={blod} />
      </Switch>
    </main>
  );
}

function Container() {
  return (
    <div className="Container">
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default Container;
