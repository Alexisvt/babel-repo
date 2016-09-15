import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Container from './components/container-component';

import store from './store';

ReactDOM.render(<Provider store={store}><Container></Container></Provider>, document.getElementById('main'));
