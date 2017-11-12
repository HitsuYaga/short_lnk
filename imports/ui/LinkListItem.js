import React from "react";
import Clipboard from "clipboard";

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

  render() {
    return (
      <div>
        <p>{this.props.url}</p>
        <p>{this.props.shortUrl}</p>
        <button ref="copy" data-clipboard-text={this.props.shortUrl}>
          {!this.state.justCopied ? "Copy" : "Copied"}
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