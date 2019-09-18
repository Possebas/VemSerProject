/* All librarys */
import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

/* Components */
import Login from "./pages/Login";
import Home from "./pages/Home";
import { PrivateRoute } from './components/PrivateRoute';
import Register from './pages/Form';
import {InvalidRoutes} from './pages/InvalidRoutes';
import WhatIs from './components/home/WhatIs';

/* CSS */
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <PrivateRoute path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="*" component={InvalidRoutes} />
          <Route path="/whatis" component={WhatIs}/>
        </Switch>
      </BrowserRouter>
    );
  }
}