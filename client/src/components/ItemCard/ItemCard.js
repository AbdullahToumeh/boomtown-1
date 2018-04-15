import React from 'react';
import PropTypes from 'prop-types';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {Link} from 'react-router-dom';
import Gravatar from 'react-gravatar';

const styles = {
  width: '350px',
  gravatar: {
    borderRadius: '50%'
  },
  flatButton: {
    color: 'white'
  }
}

const dateComparison = (date) => {
  const todayDate = new Date();
  const duration = new Date(todayDate - date);
  console.log(todayDate);
  console.log(date)
  return (
    "A person"
  )
}
 
const ItemCard = (props) => {
  const item = props.itemsData;
  return (
    <Card>
      <CardMedia>
        <img src={item.imageurl} />
      </CardMedia>
      <Link to={ { pathname: `/profile/${item.itemowner.id}`, state: {bio: item.itemowner.bio, email: item.itemowner.email, fullname: item.itemowner.fullname} }  }>
        <CardHeader title={item.itemowner.fullname} subtitle={dateComparison(item.created)} avatar={<Gravatar email={item.itemowner.email} style={styles.gravatar} />}/>
      </Link>
      <CardTitle title={item.title} subtitle={item.tags.toString()} />
      <CardText>
        {item.description}
      </CardText>
      <CardActions>
        <FlatButton label="Borrow" backgroundColor="#263238" labelStyle={styles.flatButton}/>
    </CardActions>
    </Card>
  )
}

export default ItemCard;