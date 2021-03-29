import React from 'react';
import { Route, Redirect } from "react-router-dom";


interface Props {
  Component: React.ComponentType<any>,
  path: string,
}

const PrivateRoute: React.FC<Props> = ({ Component, ...rest }) => {
  var token = localStorage.getItem("token");

  return (
    <Route
      { ...rest }

      render = {props =>
        token ?
        (
          <Component { ...props } />
        ) : (
          <Redirect to={"/login"} />
        )
      }
    />
  );
}

export default PrivateRoute;
