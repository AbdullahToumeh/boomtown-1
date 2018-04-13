import React from 'react';
import PropTypes from 'prop-types';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {Link} from 'react-router-dom';

const styles={
  width: '350px'
}

const ItemCard = (props) => {
  const item = props.itemsData;
  return (
    <Card style={styles}>
      <CardMedia>
        <img src={item.imageurl} />
      </CardMedia>
      <Link to={ { pathname: `/profile/${item.itemowner.id}`, state: {bio: item.itemowner.bio, email: item.itemowner.email, fullname: item.itemowner.fullname} }  }>
        <CardHeader title={item.itemowner.fullname} subtitle="A person" avatar="http://placekitten.com/g/50/50"/>
      </Link>
      <CardTitle title={item.title} subtitle="Card subtitle" />
      <CardText>
        {item.description}
      </CardText>
      <CardActions>
        <FlatButton label="Borrow" />
    </CardActions>
    </Card>
  )
}

export default ItemCard;