/* All librarys */
import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

/* Components */
import Login from "./pages/Login";
import Home from "./pages/Home";
import CandidateDetail from './pages/CandidateDetail';
import { PrivateRoute } from './components/PrivateRoute';
import Register from './pages/Form';
<<<<<<< HEAD
import {InvalidRoutes} from './pages/InvalidRoutes';
import WhatIs from './components/home/WhatIs';
=======

>>>>>>> 8a664d062195a99d86a19a192b73b43c5b98f567

/* CSS */
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/candidateDetail" component={CandidateDetail} />
          <Route path="/register" component={Register} />
<<<<<<< HEAD
          <Route path="*" component={InvalidRoutes} />
          <Route path="/whatis" component={WhatIs}/>
=======
          <Route path="*" component={() => <h1 className="text-center">Page not found</h1>} />
>>>>>>> 8a664d062195a99d86a19a192b73b43c5b98f567
        </Switch>
      </BrowserRouter>
    );
  }
}