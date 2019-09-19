/* All librarys */
import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

/* Components */
import Login from "./pages/Login";
import Home from "./pages/Home";
import { PrivateRoute } from './components/PrivateRoute';
import Register from './pages/Form';
import CandidateDetail from "./pages/CandidateDetail";
import {InvalidRoutes} from './pages/InvalidRoutes';

/* CSS */
import "./App.css";


export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/candidateDetail" component={CandidateDetail} />
          <Route path="*" component={InvalidRoutes} />
        </Switch>
      </BrowserRouter>
    );
  }
}