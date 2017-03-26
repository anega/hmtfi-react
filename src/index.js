import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './router';
import App from './components/App/index';

render(
    <Router history={browserHistory} routes={routes}/>,
    document.getElementById('root')
);
