"use strict";
const redux_1 = require('redux');
const userReducer_1 = require('./reducers/userReducer');
const logger = require('redux-logger');
const middlewares = redux_1.applyMiddleware(logger());
const reducers = redux_1.combineReducers({
    users: userReducer_1.userReducer
});
const store = redux_1.createStore(reducers, middlewares);
exports.default = store;
