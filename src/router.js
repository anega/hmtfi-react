import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './components/App/index'
import AnnouncementsList from './components/Announcements/index'
import AnnouncementsItemPage from './components/Announcements/AnnouncementItemPage'
import NotFound from './components/NotFound/index'

export default (
  <Route path='/' component={App}>
    <IndexRoute component={AnnouncementsList} />
    <Route path='announcement/:id' component={AnnouncementsItemPage} />
    <Route path='*' component={NotFound} />
  </Route>
)
