import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Masonry from 'react-masonry-component';

import ItemCard from '../ItemCard';
import './style.css';

const masonryOptions = {
    horizontalOrder: true,
    itemSelector: '.grid-item',
    columnWidth: '.grid-item',
    percentPosition: true,
    gutter: 20,
    fitWidth: true
};

const ItemCardList = props => {
    console.log(props.itemFilters);
    return (
        <Masonry
            elementType={'ul'}
            className={'masonry-grid'}
            options={masonryOptions}
            disableImagesLoaded={false}
            updateOnEachImageLoad
        >
            {props.itemFilters.length !== 0
                ? props.itemFilters.map(filter => {
                      props.itemsData.filter(item => console.log(item));
                  })
                : props.itemsData.map((item, index) => (
                      <li key={index} className={'grid-item'}>
                          <ItemCard itemsData={item} />
                      </li>
                  ))}
        </Masonry>
    );
};

export default ItemCardList;

ItemCardList.propTypes = {
    itemsData: PropTypes.arrayOf(PropTypes.object).isRequired
};
