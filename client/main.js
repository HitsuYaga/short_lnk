
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';

import SignUp from './../imports/ui/SignUp';
import Link from './../imports/ui/Link';
import NotFound from './../imports/ui/NotFound';
import Login from './../imports/ui/Login';

const unauthenticatedPage = ['/', '/signup'];
const authenticatedPage = ['/links']

const routes = (
  <Router history={browserHistory}>
    <Route path="/signup" component={SignUp}/>
    <Route path="/" component={Login}/>
    <Route path="/links" component={Link}/>
    <Route path="/*" component={NotFound}/>
  </Router>
);

Tracker.autorun(() => {
  isAuthenticated = !!Meteor.userId();
  pathName = browserHistory.getCurrentLocation().pathname;
  isUnauthenticatedPage = unauthenticatedPage.includes(pathName);
  isAuthenticatedPage = authenticatedPage.includes(pathName);

  if (isUnauthenticatedPage && isAuthenticated) {
    browserHistory.push('/links');
  } else if (isAuthenticatedPage && !isAuthenticated) {
    browserHistory.push('/');
  }
})

Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById('app'))
});
