import { createStore, applyMiddleware, combineReducers } from 'redux';
import { userReducer as users, IUserState } from './reducers';
import * as logger from 'redux-logger';

export interface IStoreState {
  users: IUserState[];
}

const middlewares = applyMiddleware(logger());

const reducers = combineReducers<IStoreState>({
  users
});

const store = createStore<IStoreState>(reducers, middlewares);

export { store as default };
