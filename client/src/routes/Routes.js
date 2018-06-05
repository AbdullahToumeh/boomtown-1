import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from '../containers/Login';
import Items from '../containers/Items';
import Share from '../containers/Share';
import NotFound from '../containers/NotFound';
import Profile from '../containers/Profile';

import PrivateRoute from './PrivateRoute';

const Routes = () => (
  <Switch>
    <PrivateRoute exact path="/" component={Items} />
    <Route exact path="/login" component={Login} />
    <PrivateRoute exact path="/share" component={Share} />
    <PrivateRoute path="/profile/:itemownerId" component={Profile} />
    <Route path="/*" component={NotFound} />
  </Switch>
);

export default Routes;
