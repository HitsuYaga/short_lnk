
import {Meteor} from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';

import SignUp from './../imports/ui/SignUp';
import Link from './../imports/ui/Link';
import NotFound from './../imports/ui/NotFound';
import Login from './../imports/ui/Login';

const routes = (
  <Router history={browserHistory}>
    <Route path="/signup" component={SignUp}/>
    <Route path="/" component={Login}/>
    <Route path="/links" component={Link}/>
    <Route path="/*" component={NotFound}/>
  </Router>
);

Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById('app'))
});
