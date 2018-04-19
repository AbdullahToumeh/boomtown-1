import React from 'react';
import PropTypes from 'prop-types';
import ItemCard from '../ItemCard';
import Masonry from 'react-masonry-component';
import './style.css';

const masonryOptions = {
  horizontalOrder: true,
  columnWidth: 350,
  gutter: 20
}


const ItemCardList = (props) => {
  return (
    <Masonry elementType={'ul'} className={'masonry-grid'} options={masonryOptions} disableImagesLoaded={false}
    updateOnEachImageLoad={true}>
      {props.itemsData.map((item, index) => (
        <li key={index} className={'grid-item'}>
          <ItemCard itemsData={item} />
        </li>
      ))}
    </Masonry>
  )
}

export default ItemCardList;