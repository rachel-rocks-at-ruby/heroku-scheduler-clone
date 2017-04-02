import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Hero extends Component {

  render () {
    return (
      <div>
        <div className="jumbotron">
          <div className="text-center">
            <h3 className="purple-text">Schedule recurring tasks for your app</h3>
            <h3><small>Heroku Scheduler lets you add jobs which are executed at regular intervals.<br />For more information, please <a href="https://devcenter.heroku.com/articles/scheduler">view the docs</a>.</small></h3>
          </div>
        </div>
        <div>
          <Link to="new-task" className="btn btn-lg btn-block purple-button">Add new job</Link>
        </div>
      </div>
    );
  }
}
