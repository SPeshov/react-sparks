import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Router, Route, browserHistory } from 'react-router';

import One from './One';
import Two from './Two';
import Three from './Three';
import Four from './Four';
import Fourpointone from './Fourpointone';
import NoMatch from './NoMatch';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/one" component={One} />
      <Route path="/two" component={Two} />
      <Route path="/three" component={Three} />
      <Route path="/Four" component={Four}>
        <Route path="/Four/:id" component={Fourpointone} />
      </Route>
    </Route>

    <Route path="*" component={NoMatch} />
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
