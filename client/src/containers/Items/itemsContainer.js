import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import LoadingWheel from '../../components/LoadingWheel';

import Items from './items';

import './style.css';

const itemsQuery = gql`
    query {
        items {
            id
            title
            description
            imageurl
            tags
            itemowner {
                id
                fullname
                bio
                email
            }
            created
            available
            borrower {
                fullname
            }
        }
    }
`;

const ItemsContainer = props => (
    <Query query={itemsQuery}>
        {({ loading, error, data }) => {
            console.log(data);
            if (loading) return <LoadingWheel />;
            if (error) return <p>Error!</p>;
            return (
                <Items itemsData={data.items} itemFilters={props.itemFilters} />
            );
        }}
    </Query>
);

export default connect(state => ({
    itemFilters: state.itemsData.itemFilters
}))(ItemsContainer);

ItemsContainer.propTypes = {
    itemFilters: PropTypes.arrayOf(PropTypes.string).isRequired
};
