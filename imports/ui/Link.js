import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Accounts } from 'meteor/accounts-base';

import { Links } from '../api/links';
import LinkList from './LinkList';

export default class Link extends React.Component {
  onLogOut() {
    Accounts.logout();
  }

  onSubmit(e) {
    const url = this.refs.url.value.trim();
    e.preventDefault();

    if (url) {
      Meteor.call('links.insert', url)
      this.refs.url.value = '';
    }
  }

  render() {
    return (
      <div>
        <h1>Your links</h1>
        <button onClick={this.onLogOut.bind(this)}>Log out</button>
        <LinkList />
        <p>Add link</p>
        <form onSubmit={this.onSubmit.bind(this)}>
          <input type="text" ref="url" placeholder="URL"/>
          <button>Add Link</button>
        </form>
      </div>
    )
  }
}