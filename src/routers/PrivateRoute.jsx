import React from 'react'
import { Redirect, Route } from 'react-router'

const PrivateRoute = ({
  component: Component,
  logged, 
  ...rest
}) => {
  return (
    <Route
      { ...rest }
      component={ (props) => (logged
        ? <Component {...props} />
        : <Redirect to="/auth/login" />
      ) } />
  );
};

export default PrivateRoute;
