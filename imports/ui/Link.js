import React from 'react';
import {Accounts} from 'meteor/accounts-base';

export default class Link extends React.Component {
  onLogOut() {
    Accounts.logout();
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