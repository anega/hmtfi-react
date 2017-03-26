import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App/index';
import AnnouncementsList from './components/AnnouncementsList/index';
import Test from './components/Test/index';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={AnnouncementsList}/>
        <Route path="test" component={Test}/>
    </Route>
);