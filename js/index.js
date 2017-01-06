require('babel-polyfill');

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';

import InboxEmailListContainer from './components/inbox-email-list-container';
import SpamEmailListContainer from './components/spam-email-list-container';
import App from './components/app';
import InboxEmailContainer from './components/inbox-email-container';
import SpamEmailContainer from './components/spam-email-container';

const routes = (
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <Route path = 'inbox' component={InboxEmailListContainer} />
            <Route path = 'spam' component={SpamEmailListContainer} />
            <Route path="inbox/:emailId" component={InboxEmailContainer} />
            <Route path="spam/:emailId" component={SpamEmailContainer} />
        </Route>
    </Router>
);

document.addEventListener('DOMContentLoaded', () =>
    ReactDOM.render(routes, document.getElementById('app'))
);
// const routes = (
//   <Router history={hashHistory}>
//     <Route path="/inbox" component={EmailListContainer} />
//   </Router>
// );
//
// document.addEventListener('DOMContentLoaded', () =>
//     ReactDOM.render(routes, document.getElementById('app'))
// );
