/* All librarys */
import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

/* Components */
import Login from "./pages/Login";
import Home from "./pages/Home";

import AdminPainel from "./pages/AdminPainel";
import CandidateDetail from './pages/CandidateDetail';
import PrivateRoute from './components/PrivateRoute';
import Register from './pages/Form';
import RegisterQuestions from './pages/FormQuestions';

/* CSS */
import "./App.css";

export default class App extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/admin" component={AdminPainel} />
          <Route path="/candidateDetail" component={CandidateDetail} />
          <Route path="/register" component={Register} />
          <Route path="/questions" component={RegisterQuestions} />
          <Route path="*" component={() => <h1 className="text-center my-5">Página não encontrada</h1>} />
        </Switch>
      </BrowserRouter>
    );
  }
}