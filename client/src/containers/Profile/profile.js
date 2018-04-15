import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

export default class Profile extends Component {
  render() {
    console.log(this.props.itemInfo);
    return (
      <Card>
        <h1>{this.props.profileInfo.fullname}</h1>
        <p>{this.props.profileInfo.bio}</p>
        <p>{this.props.profileInfo.email}</p>
      </Card>
    )
  }
}