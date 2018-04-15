import React from 'react';
import PropTypes from 'prop-types';
import ItemCard from '../ItemCard';
import Masonry from 'react-masonry-component';

const styles = {
  width: '100vw',
  li: {
    width: '350px',
    marginBottom: '20px'
  }
}

const masonryOptions = {
  horizontalOrder: true,
  columnWidth: 350,
  gutter: 20
}


const ItemCardList = (props) => {
  return (
    <Masonry elementType={'ul'} options={masonryOptions} style={styles} disableImagesLoaded={false}
    updateOnEachImageLoad={true}>
      {props.itemsData.map((item, index) => (
        <li key={index} style={styles.li} className={'grid-item'}>
          <ItemCard itemsData={item} />
        </li>
      ))}
    </Masonry>
  )
}

export default ItemCardList;