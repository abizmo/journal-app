import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';

import AuthRouter from './AuthRouter';
import JournalPage from '../pages/JournalPage';

const JournalRouter = () => (
  <Router>
    <Switch>
      <Route path="/auth">
        <AuthRouter />
      </Route>
      <Route exact path="/">
        <JournalPage />
      </Route>
      <Redirect to="/auth/login" />
    </Switch>
  </Router>
);

export default JournalRouter;
