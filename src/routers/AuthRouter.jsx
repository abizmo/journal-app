import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';

const AuthRouter = () => (
  <Switch>
    <Route path="/auth/login">
      <LoginPage />
    </Route>
    <Route path="/auth/register">
      <RegisterPage />
    </Route>
    <Redirect to="/auth/login" />
  </Switch>
);

export default AuthRouter;
