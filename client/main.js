import { Meteor } from "meteor/meteor";
import { Session } from "meteor/session";
import { Tracker } from "meteor/tracker";
import ReactDOM from "react-dom";
import { routes, onAuthChange } from "./../imports/routes/routes";
import "../imports/startup/simple-schema-configuration";

import Link from "../imports/api/links";

Tracker.autorun(() => {
  isAuthenticated = !!Meteor.userId();
  onAuthChange(isAuthenticated);
});

Meteor.startup(() => {
  Session.set("showVisible", true);
  ReactDOM.render(routes, document.getElementById("app"));
});
