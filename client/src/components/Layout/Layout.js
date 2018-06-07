import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import Header from '../HeaderBar';
import Footer from '../Footer/';

import './styles.css';

const Layout = ({ children }) => {
  return (
    <div className="appContentWrapper">
      <div className="appHeader">
        <Route exact path="/" component={Header} />
        <Route strict path="/profile/" component={Header} />
        <Route exact path="/share" component={Header} />
      </div>
      <div className="appContent">{children}</div>
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  children: null
};

Layout.propTypes = {
  children: PropTypes.node
};

export default Layout;
