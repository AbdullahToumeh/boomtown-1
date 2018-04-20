import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import logo from '../../images/boomtown-logo.svg';
import {Link} from 'react-router-dom';
import './styles.css';
import TagFilterField from '../TagFilterField/';
import { connect } from 'react-redux';

class Header extends Component {

  getTags = items => {
    let tags = [];
    if (items.length && items[0] !== undefined) {
      items.map(item => {
        if (item.tags !== undefined) {
          if (!item.tags.includes(undefined)) {
            item.tags.map(tag => {
              if (!tags.includes(tag)) {
                tags.push(tag);
              }
            })
          }
        }
      })
    }
    return tags;
  }



  render() {
    const tags = this.getTags(this.props.itemsData.items);
    return (
      <Paper className={'header-bar'}>
        <Link to={'/'} className={'home-logo'}>
          <img src={logo} alt="Boomtown Logo" className={'home-logo'}/>
        </Link>
        {tags.length && <TagFilterField tags={tags}/>}
        <div>
          <RaisedButton label="My Profile" className={'my-profile-button'} primary={true}/>
          <RaisedButton label="Logout" secondary={true}/>
        </div>
      </Paper>
    )
  }
}

export default connect(state => {
  return {
    itemsData: state.itemsData
  }
})(Header);