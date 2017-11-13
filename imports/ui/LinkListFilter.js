import React from "react";
import { Session } from "meteor/session";
import { Tracker } from "meteor/tracker";

export default class LinkListFilter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showVisible: true
    };
  }

  componentDidMount() {
    this.tracker = Tracker.autorun(() => {
      this.setState({ showVisible: Session.get("showVisible") });
    });
  }

  componentWillUnmount() {
    this.tracker.stop();
  }

  render() {
    return (
      <div>
        <label>
          <input
            type="checkbox"
            checked={!this.state.showVisible}
            onChange={e => {
              console.log(e.target.checked);
              Session.set("showVisible", !e.target.checked);
            }}
          />
          Show links hidden
        </label>
      </div>
    );
  }
}
