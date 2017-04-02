import React, { Component } from 'react';
import { Link } from 'react-router';
import NewTaskForm from '../new-task/NewTaskForm';

export default class Hero extends Component {

  constructor (props) {
    super(props);
    this.state = {
      showingButton: true
    }

    this.toggleView = this.toggleView.bind(this);
  }

  toggleView () {
    this.setState({
      showingButton: !this.state.showingButton
    });
  }

  render () {
    return (
      <div>
        <div className="jumbotron">
          <div className="text-center">
            <h3 className="purple-text">Schedule recurring tasks for your app</h3>
            <h3><small>Heroku Scheduler lets you add jobs which are executed at regular intervals.<br />For more information, please <a href="https://devcenter.heroku.com/articles/scheduler">view the docs</a>.</small></h3>
          </div>
        </div>
        { (this.state.showingButton)
        ? <button
          onClick={this.toggleView}
          className="btn btn-lg btn-block purple-button">Add new job
          </button>
        : <NewTaskForm toggleViewFunc={this.toggleView} /> }
      </div>
    );
  }
}
