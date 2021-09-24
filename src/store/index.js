import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from 'redux-thunk';

import authReducer from "../reducers/authReducer";
import uiReducer from "../reducers/uiReducer";

const reducers = combineReducers({
  auth: authReducer,
  ui: uiReducer,
});

const middleware = [ thunk ];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware( ...middleware )
  ),
);

export default store;
