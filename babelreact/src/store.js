import { createStore, applyMiddleware, combineReducers } from 'redux';
import { userReducer as users } from './reducers/userReducer';
import logger from 'redux-logger';

const middlewares = applyMiddleware(logger());

const reducers = combineReducers({
  users
});

const store = createStore(reducers, middlewares);

export { store as default };
