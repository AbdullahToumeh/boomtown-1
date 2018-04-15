import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Gravatar from 'react-gravatar';
import Paper from 'material-ui/Paper';

const styles = {
  width: '800px',
  marginBottom: '50px',
  display: 'flex',
  padding: '30px',
  margin: '0 auto',
  justifyContent: 'space-between',
  gravatar: {
    borderRadius: '50%'
  },
  textField: {
    padding: '0'
  },
  heading: {
    padding: '0 0 25px',
    fontSize: '2.5em'
  }
}

export default class Profile extends Component {
  render() {
    return (
      <Paper style={styles}>
        <CardTitle title={this.props.profileInfo.fullname} subtitle={this.props.profileInfo.bio} titleStyle={styles.heading}/>
        <CardText>
          <CardTitle title={this.props.itemInfo.length} subtitle="Items Shared" style={styles.textField}/>
          <CardTitle title='0' subtitle='Items Borrowed' style={styles.textField}/>
        </CardText>
        <Gravatar email={this.props.profileInfo.email} size={200} style={styles.gravatar}/>
      </Paper>
    )
  }
}