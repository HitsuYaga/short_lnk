import { Meteor } from 'meteor/meteor';
import React from 'react'
import { Tracker } from 'meteor/tracker';

import { Links } from '../api/links';

export default class LinkList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      links: []
    }
  }

  componentDidMount = () => {
    this.linksTracker = Tracker.autorun(() => {
      Meteor.subscribe('links')
      const links = Links.find().fetch();

      this.setState(() => ({ links }))
    });
  }
  
  componentWillUnMount = () => {
    this.linksTracker.stop();
  }
  
  renderLinkListItems() {
    return this.state.links.map((link) => {
      return <p key={link._id}>{link.url}</p>
    })
  }

  render() {
    return (
      <div>
        <p>Link List</p>
        <div>
          {this.renderLinkListItems()}
        </div>
      </div>
    )
  }
}
