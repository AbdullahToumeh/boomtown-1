import React from 'react';
import PropTypes from 'prop-types';
import Masonry from 'react-masonry-component';

import ItemCard from '../ItemCard';
import './style.css';

const masonryOptions = {
  horizontalOrder: true,
  columnWidth: 350,
  gutter: 20
};


const ItemCardList = (props) => {
  return (
    <Masonry
      elementType={'ul'}
      className={'masonry-grid'}
      options={masonryOptions}
      disableImagesLoaded={false}
      updateOnEachImageLoad
    >
      {props.itemsData.map((item, index) => (
        <li key={index} className={'grid-item'}>
          <ItemCard itemsData={item} />
        </li>
      ))}
    </Masonry>
  );
};

export default ItemCardList;

ItemCardList.propTypes = {
  itemsData: PropTypes.array.isRequired
};
