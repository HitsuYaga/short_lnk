import { Meteor } from "meteor/meteor";
import React from "react";
import Clipboard from "clipboard";
import moment from "moment";

export default class LinkListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      justCopied: false
    };
  }
  componentDidMount() {
    this.clipboard = new Clipboard(this.refs.copy);

    this.clipboard
      .on("success", () => {
        this.setState(() => ({ justCopied: true }));
        setTimeout(() => {
          this.setState(() => ({ justCopied: false }));
        }, 500);
      })
      .on("error", () => {
        alert("Can not copy to clipboard. Please do it manual");
      });
  }

  componentWillUnmount() {
    this.clipboard.destroy();
  }

  renderStats() {
    const visitMessage = this.props.visitedCount === 1 ? "visit" : "visits";
    let visitedMessage = null;

    if (typeof this.props.visitedCount === "number") {
      visitedMessage = `(visited ${moment(
        this.props.lastVisitedAt
      ).fromNow()})`;
    }

    return (
      <p>
        {this.props.visitedCount} {visitMessage} - {visitedMessage}
      </p>
    );
  }

  render() {
    return (
      <div>
        <p>{this.props.url}</p>
        <p>{this.props.shortUrl}</p>
        <p>{this.props.visible.toString()}</p>
        {this.renderStats()}
        <button ref="copy" data-clipboard-text={this.props.shortUrl}>
          {!this.state.justCopied ? "Copy" : "Copied"}
        </button>
        <button
          onClick={() => {
            Meteor.call(
              "links.setVisibility",
              this.props._id,
              !this.props.visible
            );
          }}
        >
          {this.props.visible ? "Hide" : "Unhide"}
        </button>
      </div>
    );
  }
}

// LinkListItem.propsTypes = {
//   _id: React.PropsTypes.string.isRequired,
//   url: React.PropsTypes.string.isRequired,
//   shortUrl: React.PropsTypes.string.isRequired,
//   userId: React.PropsTypes.string.isRequired
// }
