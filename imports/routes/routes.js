import { Meteor } from "meteor/meteor";
import React from "react";
import { Router, Route, browserHistory } from "react-router";

import SignUp from "./../ui/Signup";
import Link from "./../ui/Link";
import NotFound from "./../ui/NotFound";
import Login from "./../ui/Login";

const unauthenticatedPage = ["/", "/signup"];
const authenticatedPage = ["/links"];

const onEnterPublicPage = () => {
  if (Meteor.userId()) {
    browserHistory.push("/links");
  }
};

const onEnterPrivatePage = () => {
  if (!Meteor.userId()) {
    browserHistory.push("/");
  }
};

export const onAuthChange = isAuthenticated => {
  pathName = browserHistory.getCurrentLocation().pathname;
  isUnauthenticatedPage = unauthenticatedPage.includes(pathName);
  isAuthenticatedPage = authenticatedPage.includes(pathName);

  if (isUnauthenticatedPage && isAuthenticated) {
    browserHistory.push("/links");
  } else if (isAuthenticatedPage && !isAuthenticated) {
    browserHistory.push("/");
  }
};

export const routes = (
  <Router history={browserHistory}>
    <Route path="/signup" component={SignUp} onEnter={onEnterPublicPage} />
    <Route path="/" component={Login} onEnter={onEnterPublicPage} />
    <Route path="/links" component={Link} onEnter={onEnterPrivatePage} />
    <Route path="/*" component={NotFound} />
  </Router>
);

Tracker.autorun(() => {
  isAuthenticated = !!Meteor.userId();
  pathName = browserHistory.getCurrentLocation().pathname;
  isUnauthenticatedPage = unauthenticatedPage.includes(pathName);
  isAuthenticatedPage = authenticatedPage.includes(pathName);

  if (isUnauthenticatedPage && isAuthenticated) {
    browserHistory.push("/links");
  } else if (isAuthenticatedPage && !isAuthenticated) {
    browserHistory.push("/");
  }
});
