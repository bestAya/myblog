import React from "react";
import { Switch, Route } from "react-router-dom";
import "./index.scss";
import blod from "../home/blodlist";
function Header() {
  return (
    <header className="header">
      <ul className="header-tab">
        <li className="active">全部</li>
        <li>最新</li>
        <li>最新</li>
        <li>最佳分享</li>
      </ul>
      <div className="header-icon">
        <span className="iconfont icon-search"></span>|
        <span className="iconfont icon-qrcode"></span>
      </div>
    </header>
  );
}
function Footer() {
  return <footer className="footer">bar</footer>;
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
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default Container;
