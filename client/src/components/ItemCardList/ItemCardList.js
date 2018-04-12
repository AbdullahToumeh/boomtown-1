import React from 'react';
import PropTypes from 'prop-types';
import ItemCard from '../ItemCard';

const styles = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between'
}

const ItemCardList = (props) => {
  return (
    <ul style={styles}>
      {props.itemsData.map((item, index) => (
        <li key={index}>
          <ItemCard itemsData={item} />
        </li>
      ))}
    </ul>
  )
}

export default ItemCardList;