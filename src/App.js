import React from "react";
import "./App.less";
import Dashboard from "./components/pages/Dashboard";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import MainContent from "./components/pages/MainContent"
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

const App = () => {
const username = "habib"
const password = "koderahasia"

  return(
  <BrowserRouter>
    <Switch>
    <Route path="/" exact  render={props => username !== 'habib' && password !== 'koderahasia' ? <Home {...props} /> : <Redirect to="/main_content" />} />
    <Route path="/login" render={props => <Login {...props} /> } />
    <Route path="/main_content" render={props => <MainContent {...props} /> } />
    <Route path="/dashboard" render={props => <Dashboard {...props} /> } />
    </Switch>
  </BrowserRouter>
)
};

export default App;
