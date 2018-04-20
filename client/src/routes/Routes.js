import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Login from '../containers/Login';
import Items from '../containers/Items';
import Share from '../containers/Share';
import NotFound from '../containers/NotFound';
import Profile from '../containers/Profile';

const Routes =  () => {
  return (
      <Switch>
          <Route exact path="/" component={Items} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/share" component={Share} />
          <Route path="/profile/:itemownerId" component={Profile} />
          <Route path="/*" component={NotFound} />
      </Switch>
  )
}

export default Routes;