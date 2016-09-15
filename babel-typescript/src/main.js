"use strict";
const React = require('react');
const ReactDOM = require('react-dom');
const react_redux_1 = require('react-redux');
const container_component_1 = require('./components/container-component');
const store_1 = require('./store');
ReactDOM.render(React.createElement(react_redux_1.Provider, {store: store_1.default}, 
    React.createElement(container_component_1.default, null)
), document.getElementById('main'));
