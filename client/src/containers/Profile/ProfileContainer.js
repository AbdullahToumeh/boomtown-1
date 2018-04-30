import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import LoadingWheel from '../../components/LoadingWheel';
import Profile from './Profile';
import ItemCardList from '../../components/ItemCardList';

const profileQuery = gql`
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
                console.log(data);
                if (loading) return <LoadingWheel />;
                if (error) return <p>Error!</p>;
                return (
                    <div>
                        <Profile
                            profileInfo={props.location.state}
                            itemInfo={data.user.owneditems}
                        />
                        <ItemCardList
                            itemsData={data.user.owneditems}
                            itemFilters={[]}
                        />
                    </div>
                );
            }}
        </Query>
    );
};

// ProfileContainer.defaultProps = {
//     match: {}
// };

// export default connect(state => ({
//     itemsData: state.profileItems
// }))(ProfileContainer);

export default ProfileContainer;

// ProfileContainer.propTypes = {
//     itemsData: PropTypes.objectOf(
//         PropTypes.oneOfType([PropTypes.array, PropTypes.bool, PropTypes.string])
//     ).isRequired,
//     location: PropTypes.objectOf(
//         PropTypes.oneOfType([PropTypes.string, PropTypes.object])
//     ).isRequired,
//     dispatch: PropTypes.func.isRequired,
//     match: PropTypes.objectOf(
//         PropTypes.oneOfType([
//             PropTypes.bool,
//             PropTypes.object,
//             PropTypes.string
//         ])
//     )
// };
