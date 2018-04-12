import React, { Component } from 'react';
import ItemCardList from '../../components/ItemCardList';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const Items = (props) => {
  return (
    <ItemCardList itemsData={props.itemsData} />
  )
}

export default Items;