import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import {cyan500, cyan200, grey900, grey500} from 'material-ui/styles/colors';
import logo from '../../images/boomtown-logo.svg';
import {Link} from 'react-router-dom';

const styles = {
  width: '100vw',
  padding: '15px',
  marginBottom: '50px',
  display: 'flex',
  justifyContent: 'space-between',
  button: {
    color: 'white'
  },
  button2: {
    color: 'white',
    margin: '0 20px'
  },
  image: {
    width: '35px',
    height: '35px'
  }
}

export default class Header extends Component {
  render() {
    return (
      <Paper style={styles}>
        <Link to={'/'}>
          <img src={logo} alt="Boomtown Logo" style={styles.image}/>
        </Link>
        <div>
          <FlatButton label="My Profile" backgroundColor={cyan500} style={styles.button2} hoverColor={cyan200}/>
          <FlatButton label="Logout" backgroundColor={grey900} style={styles.button} hoverColor={grey500}/>
        </div>
      </Paper>
    )
  }
}