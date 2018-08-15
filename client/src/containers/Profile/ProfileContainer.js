import React from 'react';
import PropTypes from 'prop-types';

import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import LoadingWheel from '../../components/LoadingWheel';
import Profile from './Profile';
import ItemCardList from '../../components/ItemCardList';

export const profileQuery = gql`
  query user($userId: ID!) {
    user(id: $userId) {
      id
      email
      fullname
      bio
      owneditems {
        title
        description
        imageurl
        tags
        created
        available
        tags
        itemowner {
          id
          fullname
          email
        }
      }
      borroweditems {
        title
        description
        imageurl
        tags
        created
        available
      }
    }
  }
`;

const ProfileContainer = props => {
  const userId = props.match.params.itemownerId;
  return (
    <Query query={profileQuery} variables={{ userId }}>
      {({ loading, error, data }) => {
        if (loading) return <LoadingWheel />;
        if (error) return <p>Error!</p>;
        return (
          <div>
            <Profile profileInfo={data.user} itemInfo={data.user.owneditems} />
            <ItemCardList itemsData={data.user.owneditems} itemFilters={[]} />
          </div>
        );
      }}
    </Query>
  );
};

ProfileContainer.defaultProps = {
  match: {},
  location: {}
};

export default ProfileContainer;

ProfileContainer.propTypes = {
  match: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.bool, PropTypes.object, PropTypes.string])
  ),
  location: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.object])
  )
};
