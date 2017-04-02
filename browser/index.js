'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Hero from './components/hero/Hero';
import NewTaskForm from './components/new-task/NewTaskForm';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

ReactDOM.render(
    <div className="container flexbox-container">
        <Router history={hashHistory}>
          <Route path="/">
            <Route path="index" component={Hero} />
            <IndexRoute component={Hero}/>
          </Route>
        </Router>
      </div>,
  document.getElementById('app')
);
