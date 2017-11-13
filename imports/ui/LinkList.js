import { Meteor } from "meteor/meteor";
import { Session } from "meteor/session";
import React from "react";
import { Tracker } from "meteor/tracker";

import { Links } from "../api/links";
import LinkListItem from "./LinkListItem";

export default class LinkList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      links: []
    };
  }

  componentDidMount = () => {
    this.linksTracker = Tracker.autorun(() => {
      Meteor.subscribe("links");
      const links = Links.find({
        visible: Session.get("showVisible")
      }).fetch();

      this.setState(() => ({ links }));
    });
  };

  componentWillUnMount = () => {
    this.linksTracker.stop();
  };

  renderLinkListItems() {
    return this.state.links.map(link => {
      const shortUrl = Meteor.absoluteUrl(link._id);
      return <LinkListItem key={link._id} shortUrl={shortUrl} {...link} />;
    });
  }

  render() {
    return (
      <div>
        <p>Link List</p>
        <div>{this.renderLinkListItems()}</div>
      </div>
    );
  }
}
