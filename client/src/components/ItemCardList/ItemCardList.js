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

class ItemCardList extends Component {
    render() {
        console.log(this.props.itemFilters);
        return (
            <Masonry
                elementType={'ul'}
                className={'masonry-grid'}
                options={masonryOptions}
                disableImagesLoaded={false}
                updateOnEachImageLoad
            >
                {this.props.itemFilters.length !== 0
                    ? this.props.itemFilters.map(filter => {
                          this.props.itemsData.filter(item =>
                              console.log(item)
                          );
                      })
                    : this.props.itemsData.map((item, index) => (
                          <li key={index} className={'grid-item'}>
                              <ItemCard itemsData={item} />
                          </li>
                      ))}
            </Masonry>
        );
    }
}

export default ItemCardList;

ItemCardList.propTypes = {
    itemsData: PropTypes.arrayOf(PropTypes.object).isRequired
};
