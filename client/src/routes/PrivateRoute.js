import React from 'react';
import { auth } from '../firebase/firebase';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      auth.currentUser ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);

export default PrivateRoute;
