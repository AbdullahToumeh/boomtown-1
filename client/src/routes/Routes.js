import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

import Login from '../containers/Login';
import Items from '../containers/Items';
import Share from '../containers/Share';
import NotFound from '../containers/NotFound';
import Profile from '../containers/Profile';

const Routes =  () => {
  return (
    <Router>
      <Switch>
          <Route exact path="/" component={Items} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/share" component={Share} />
          <Route path="/profile/:itemownerId" component={Profile} />
          <Route path="/*" component={NotFound} />
      </Switch>
    </Router>
  )
}

export default Routes;