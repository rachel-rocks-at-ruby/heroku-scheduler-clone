'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Hero from './components/hero/Hero';
import NewTask from './components/new-task/NewTask';
import store from './store';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

ReactDOM.render(
  <Provider store={store}>
    <div className="container flexbox-container">
        <Router history={hashHistory}>
          <Route path="/">
            <Route path="index" component={Hero} />
            <Route path="new-task" component={NewTask} />
            <IndexRoute component={Hero}/>
          </Route>
        </Router>
      </div>
  </Provider>,
  document.getElementById('app')
);
