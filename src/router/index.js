import React, { Component } from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import home from "../pages/layout/index";

export default class RouteConfig extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/" component={home} />
        </Switch>
      </HashRouter>
    );
  }
}
