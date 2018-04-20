import React from 'react';
import ItemCardList from '../../components/ItemCardList';
import PropTypes from 'prop-types';

const Items = (props) => {
  return (
    <ItemCardList itemsData={props.itemsData} />
  )
}

export default Items;

Items.propTypes = {
  itemsData: PropTypes.array.isRequired
}