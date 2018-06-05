import React from 'react';
import PropTypes from 'prop-types';
import Header from '../HeaderBar';
import Footer from '../Footer/';

import './styles.css';

const Layout = ({ children }) => {
  return (
    <div className="appContentWrapper">
      <div className="appHeader">
        {window.location.pathname !== '/login' && <Header />}
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
