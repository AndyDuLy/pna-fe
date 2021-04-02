import React, { useReducer } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./index.css";

import PrivateRoute from "./PrivateRoute";
import Register from "./Components/RegisterPage/RegisterPage";
import Login from "./Components/LoginPage/LoginPage";
import HomePage from "./Components/HomePage/HomePage";
import UIOverhaul from "./Components/UIOverhaul/UIOverhaul";

import { TodosContextProvider, todosReducer, initialState } from "./Components/Context/TodosContext";


const App: React.FC = () => {
  const [todosState, todosDispatch] = useReducer(todosReducer, initialState);

  return (
    <TodosContextProvider value={{ state: todosState, dispatch: todosDispatch }}>
      <BrowserRouter>    
        <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/ui" component={UIOverhaul} />
          <PrivateRoute path="/" Component={HomePage} />

          <Route path="*" component={HomePage} />
        </Switch>
      </BrowserRouter>
    </TodosContextProvider>
  );
};

export default App;
