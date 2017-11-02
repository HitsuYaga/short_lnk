import React from 'react';
import {browserHistory} from 'react-router';

export default class Link extends React.Component {
  onLogOut() {
    browserHistory.push('/')
  }

  render() {
    return (
      <div>
        <h1>Your links</h1>
        <button onClick={this.onLogOut.bind(this)}>Log out</button>
      </div>
    )
  }
}