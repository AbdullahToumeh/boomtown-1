import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Profile extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>{this.props.location.state.fullname}</h1>
        <p>{this.props.location.state.bio}</p>
        <p>{this.props.location.state.email}</p>
      </div>
    )
  }
}