import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';

const Sample = () => (<h1>hola mundo</h1>);

ReactDOM.render(<Provider store={store}><Sample></Sample></Provider>, document.getElementById('main'));
