import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const styles={
  width: '400px'
}

const Items = (props) => {
  return (
    <Card style={styles}>
      <CardMedia>
        <img src="http://placekitten.com/g/400/300" />
      </CardMedia>
      <CardHeader title="Test User" subtitle="A person" avatar="http://placekitten.com/g/50/50"/>
      <CardTitle title="Card title" subtitle="Card subtitle" />
      <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
      </CardText>
      <CardActions>
        <FlatButton label="Borrow" />
    </CardActions>
    </Card>
  )
}

export default Items;