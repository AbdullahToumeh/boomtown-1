import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CardTitle, CardText } from 'material-ui/Card';
import Gravatar from 'react-gravatar';
import Paper from 'material-ui/Paper';
import './style.css';

export default class Profile extends Component {
  render() {
    return (
      <Paper className={'profile-paper'}>
        <CardTitle title={this.props.profileInfo.fullname} subtitle={this.props.profileInfo.bio} className={'profile-header'} />
        <CardText>
          <CardTitle className={'items-data'} title={this.props.itemInfo.length} subtitle="Items Shared" />
          <CardTitle title={'0'} className={'items-data'} subtitle={'Items Borrowed'} />
        </CardText>
        <Gravatar email={this.props.profileInfo.email} className={'profile-avatar'} size={200} />
      </Paper>
    );
  }
}

Profile.propTypes = {
  profileInfo: PropTypes.object.isRequired,
  itemInfo: PropTypes.arrayOf(PropTypes.object).isRequired
};
