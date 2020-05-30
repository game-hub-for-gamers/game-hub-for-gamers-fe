import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      localStorage.getItem("token") ? ( // if state matches the token in our local storage
        <Component {...props} /> // componenet is accessed
      ) : (
        // else
        <Redirect to="/login" /> // redirect user to login (does not have permissions to access this resource)
      )
    }
  />
);

export default PrivateRoute;
