import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  BrowserRouter as Router,
  Redirect,
  Switch
} from 'react-router-dom';

import AuthRouter from './AuthRouter';
import JournalPage from '../pages/JournalPage';
import { getCurrentUser } from '../firebase';
import { login } from '../actions/authActions';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import { getNotes } from '../actions/notesActions';

const JournalRouter = () => {
  const dispatch = useDispatch();
  const [checking, setChecking] = useState(true);
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    getCurrentUser((user) => {
      if (user) {
        const { displayName: name, uid: userId } = user;
        dispatch(login({ name, userId }));
        setLogged(true);
        dispatch(getNotes());
      } else {
        setLogged(false);
      }
      setChecking(false);
    });
  }, [ dispatch ]);

  if (checking) {
    return <h1>Loading...</h1>;
  }

  return (
    <Router>
      <Switch>
        <PublicRoute
          component={AuthRouter}
          logged={logged}
          path="/auth"
        />
        <PrivateRoute
          component={JournalPage}
          exact
          logged={logged}
          path="/"
        />
        <Redirect to="/auth/login" />
      </Switch>
    </Router>
  );
};

export default JournalRouter;
