import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "normalize.css";
import * as serviceWorker from "./serviceWorker";
import Route from "./router/";
import FastClick from "fastclick";
import "./utils/setRem";
import "./assets/css/iconfont.css";
FastClick.attach(document.body);

const render = Component => {
  ReactDOM.render(<Component />, document.getElementById("root"));
};

render(Route);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();