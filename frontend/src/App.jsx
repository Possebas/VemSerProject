/* All librarys */
import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

/* Components */
import Login from "./pages/Login";
import Home from "./pages/Home";

import AdminPainel from "./pages/AdminPainel";
import CandidateDetail from './pages/CandidateDetail';
import { PrivateRoute } from './components/PrivateRoute';
import Register from './pages/Form';
import RegisterQuestions from './pages/FormQuestions';

/* CSS */
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
         
          <Route path="/login" component={Login} />
          <Route path="/admin" component={AdminPainel} />
          <PrivateRoute path="/candidateDetail" component={CandidateDetail} />
          <Route path="/register" component={Register} />
          <Route path="/registerQuestions" component={RegisterQuestions} />
          <Route path="*" component={() => <h1 className="text-center">Page not found</h1>} />
        </Switch>
      </BrowserRouter>
    );
  }
}