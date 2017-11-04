import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import ReactDOM from 'react-dom';
import { routes, onAuthChange } from './../imports/routes/routes';

import Link from '../imports/api/links';

Tracker.autorun(() => {
  isAuthenticated = !!Meteor.userId();
  onAuthChange(isAuthenticated)
})

Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById('app'))
});
