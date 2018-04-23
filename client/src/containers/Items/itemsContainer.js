import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import LoadingWheel from '../../components/LoadingWheel';
import Items from './items';
import { fetchItemsFromUrl } from '../../redux/modules/items';

import './style.css';

class ItemsContainer extends Component {
    componentDidMount() {
        const urls = [
            'http://localhost:3000/items',
            'http://localhost:3000/users'
        ];

        this.props.dispatch(fetchItemsFromUrl(urls));
    }

    filterItems = itemsData => {
        if (itemsData.itemFilters.length > 0) {
            const filteredItems = itemsData.items.filter(
                item =>
                    item.tags.filter(tag =>
                        itemsData.itemFilters.find(filter => filter === tag)
                    ).length
            );
            return filteredItems;
        }
        return itemsData.items;
    };

    render() {
        return (
            <div>
                {this.props.itemsData.isLoading ? (
                    <LoadingWheel />
                ) : (
                    <Items itemsData={this.filterItems(this.props.itemsData)} />
                )}
            </div>
        );
    }
}

export default connect(state => ({
    itemsData: state.itemsData
}))(ItemsContainer);

ItemsContainer.propTypes = {
    itemsData: PropTypes.objectOf(
        PropTypes.oneOfType([PropTypes.array, PropTypes.string, PropTypes.bool])
    ).isRequired,
    dispatch: PropTypes.func.isRequired
};
