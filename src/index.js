import React from 'react'
import { render } from 'react-dom'
import configureStore from './store/configureStore'
import { Provider } from 'react-redux'
import { Router, hashHistory } from 'react-router'
import routes from './router'
import { loadAnnouncementsList } from './actions/announcementActions'

const store = configureStore()
store.dispatch(loadAnnouncementsList())

render(
  <Provider store={store}>
    <Router history={hashHistory} routes={routes} />
  </Provider>,
    document.getElementById('root')
)
