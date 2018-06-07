import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

import logo from '../../images/boomtown-logo.svg';
import './styles.css';
import TagFilterField from '../TagFilterField/';
import { auth } from '../../firebase/firebase';

const itemsQuery = gql`
  query {
    items {
      tags
    }
  }
`;

class Header extends Component {
  constructor() {
    super();
    this.state = {
      windowLocation: window.location.href
    };
  }

  getTags = items => {
    const tags = [];
    if (items.length && items[0] !== undefined) {
      items.map(item => {
        if (item.tags !== undefined) {
          if (!item.tags.includes(undefined)) {
            item.tags.map(tag => {
              if (!tags.includes(tag)) {
                tags.push(tag);
              }
            });
          }
        }
      });
    }
    return tags;
  };

  render() {
    // console.log(this.state.windowLocation);
    return (
      <Query query={itemsQuery}>
        {({ loading, error, data }) => {
          if (loading) return <p>loading</p>;
          if (error) return <p>Error!</p>;
          const tags = this.getTags(data.items);
          return (
            <Paper className={'header-bar'}>
              <div className={'home-filter-area'}>
                <Link to={'/'} className={'home-logo'}>
                  <img src={logo} alt="Boomtown Logo" className={'home-logo'} />
                </Link>
                <Route
                  exact
                  path="/"
                  render={props => (
                    <TagFilterField
                      tags={tags}
                      selectedTags={this.props.itemsData.itemFilters}
                    />
                  )}
                />
              </div>
              <div>
                <Link to={`/profile/${auth.currentUser.uid}`}>
                  <RaisedButton
                    label="My Profile"
                    className={'my-profile-button'}
                    primary
                  />
                </Link>
                <RaisedButton
                  label="Logout"
                  secondary
                  onClick={() => {
                    auth.signOut();
                    window.location.reload();
                  }}
                />
              </div>
            </Paper>
          );
        }}
      </Query>
    );
  }
}

Header.propTypes = {
  itemsData: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.array, PropTypes.string, PropTypes.bool])
  ).isRequired
};

export default connect(state => ({
  itemsData: state.itemsData
}))(Header);
