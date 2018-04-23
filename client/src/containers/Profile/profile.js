import React from 'react';
import PropTypes from 'prop-types';
import { CardTitle, CardText } from 'material-ui/Card';
import Gravatar from 'react-gravatar';
import Paper from 'material-ui/Paper';
import './style.css';

const Profile = props => (
    <Paper className={'profile-paper'}>
        <CardTitle
            title={props.profileInfo.fullname}
            subtitle={props.profileInfo.bio}
            className={'profile-header'}
        />
        <CardText>
            <CardTitle
                className={'items-data'}
                title={props.itemInfo.length}
                subtitle="Items Shared"
            />
            <CardTitle
                title={'0'}
                className={'items-data'}
                subtitle={'Items Borrowed'}
            />
        </CardText>
        <Gravatar
            email={props.profileInfo.email}
            className={'profile-avatar'}
            size={200}
        />
    </Paper>
);

Profile.propTypes = {
    profileInfo: PropTypes.objectOf(PropTypes.string).isRequired,
    itemInfo: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Profile;
