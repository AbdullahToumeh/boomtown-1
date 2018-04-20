import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import logo from '../../images/boomtown-logo.svg';
import {Link} from 'react-router-dom';
import './styles.css';

export default class Header extends Component {
  render() {
    return (
      <Paper className={'header-bar'}>
        <Link to={'/'} className={'home-logo'}>
          <img src={logo} alt="Boomtown Logo" className={'home-logo'}/>
        </Link>
        <div>
          <RaisedButton label="My Profile" className={'my-profile-button'} primary={true}/>
          <RaisedButton label="Logout" secondary={true}/>
        </div>
      </Paper>
    )
  }
}