import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./index.css";

import PrivateRoute from "./PrivateRoute";
import Register from "./Components/RegisterPage/RegisterPage";
import Login from "./Components/LoginPage/LoginPage";
import HomePage from "./Components/HomePage/HomePage";


const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute path="/" component={HomePage} />

        <Route path="*" component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
