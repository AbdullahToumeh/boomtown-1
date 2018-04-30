import React from 'react';
import PropTypes from 'prop-types';

import ItemCardList from '../../components/ItemCardList';

const Items = props => (
    <ItemCardList itemsData={props.itemsData} itemFilters={props.itemFilters} />
);

export default Items;

Items.propTypes = {
    itemsData: PropTypes.arrayOf(PropTypes.object).isRequired,
    itemFilters: PropTypes.arrayOf(PropTypes.string).isRequired
};
