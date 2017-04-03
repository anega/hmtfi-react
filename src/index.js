import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './router';
import App from './components/App/index';
import { loadAnnouncements } from './actions/announcementActions';

const store = configureStore();
store.dispatch(loadAnnouncements());

render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes}/>
    </Provider>,
    document.getElementById('root')
);
