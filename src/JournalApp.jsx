import React from 'react';
import { Provider } from 'react-redux';

import JournalRouter from './routers/JournalRouter';
import store from './store';

const JournalApp = () => (
  <Provider store={store}>
    <JournalRouter />
  </Provider>
);

export default JournalApp;
