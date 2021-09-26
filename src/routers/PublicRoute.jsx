import React from 'react'
import { Redirect, Route } from 'react-router'

const PublicRoute = ({
  component: Component,
  logged, 
  ...rest
}) => {
  return (
    <Route
      { ...rest }
      component={ (props) => ( logged
        ? <Redirect to="/" />
        : <Component {...props} />
      ) } />
  );
};

export default PublicRoute;
