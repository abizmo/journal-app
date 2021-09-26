import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';

import AuthRouter from './AuthRouter';
import JournalPage from '../pages/JournalPage';
import { getCurrentUser } from '../firebase';
import { login } from '../actions/authActions';

const JournalRouter = () => {
  const dispatch = useDispatch();
  const [checking, setChecking] = useState(true)
  const [logged, setLogged] = useState(false)

  useEffect(() => {
    getCurrentUser((user) => {
      if (user) {
        const { displayName: name, uid: userId } = user
        dispatch(login({ name, userId }))
        setLogged(true)
      } else {
        setLogged(false);
      }
      setChecking(false);
    });
  }, [ dispatch ])

  if (checking) {
    return <h1>Loading...</h1>
  }

  return (
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
};

export default JournalRouter;
