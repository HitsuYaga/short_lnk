import { Meteor } from "meteor/meteor";
import Modal from "react-modal";
import React from "react";

export default class AddLink extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      url: "",
      isOpen: false,
      error: ""
    };
  }
  onSubmit(e) {
    const { url } = this.state;
    e.preventDefault();

    if (url) {
      Meteor.call("links.insert", url, (err, res) => {
        if (!err) {
          this.handleModalClose();
        } else {
          this.setState({ error: err.reason });
        }
      });
    }
  }

  onChange(e) {
    this.setState({ url: e.target.value });
  }

  handleModalClose() {
    this.setState({ url: "", isOpen: false, error: "" });
  }

  render() {
    return (
      <div>
        <button onClick={() => this.setState({ isOpen: true })}>
          +Add link
        </button>
        <Modal
          isOpen={this.state.isOpen}
          contentLabel="Add link"
          onAfterOpen={() => this.refs.url.focus()}
          onRequestClose={this.handleModalClose.bind(this)}
        >
          <h1>Add link</h1>
          {this.state.error ? <p>{this.state.error}</p> : undefined}
          <form onSubmit={this.onSubmit.bind(this)}>
            <input
              type="text"
              ref="url"
              placeholder="URL"
              value={this.state.url}
              onChange={this.onChange.bind(this)}
            />
            <button>Add Link</button>
          </form>
          <button onClick={() => this.setState({ isOpen: false, url: "" })}>
            Cancel
          </button>
        </Modal>
      </div>
    );
  }
}
