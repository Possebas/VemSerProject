/* All librarys */
import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

/* Components */
// import Login from "./pages/Login";
import Home from "./pages/Home";
import { PrivateRoute } from './components/PrivateRoute';

/* CSS */
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <PrivateRoute path="/" exact component={Home} />
          {/* <Route path="/login" component={Login} /> */}
          <Route path="*" component={() => <h1 className="text-center">Page not found</h1>} />
        </Switch>
      </BrowserRouter>
    );
  }
}