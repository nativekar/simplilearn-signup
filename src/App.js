import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Form from "./Form";
import LoginForm from "./FormLogin";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Form} />
          <Route path="/login" component={LoginForm} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
