import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';

const AuthRouter = () => (
  <div className="auth__main">
    <div className="auth__box-container">
      <Switch>
        <Route path="/auth/login">
          <LoginPage />
        </Route>
        <Route path="/auth/register">
          <RegisterPage />
        </Route>
        <Redirect to="/auth/login" />
      </Switch>
    </div>
  </div>
);

export default AuthRouter;
