import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Query } from 'react-apollo';

import LoadingWheel from '../../components/LoadingWheel';
import gql from 'graphql-tag';

import Items from './items';
import { fetchItemsFromUrl } from '../../redux/modules/items';

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

class ItemsContainer extends Component {
    render() {
        console.log(this.props.itemFilters);
        return (
            <Query query={itemsQuery}>
                {({ loading, error, data }) => {
                    console.log(data);
                    if (loading) return <LoadingWheel />;
                    if (error) return <p>Error!</p>;
                    return (
                        <Items
                            itemsData={data.items}
                            itemFilters={this.props.itemFilters}
                        />
                    );
                }}
            </Query>
        );
    }
}

export default connect(state => ({
    itemFilters: state.itemsData.itemFilters
}))(ItemsContainer);

// ItemsContainer.propTypes = {
//     itemsData: PropTypes.objectOf(
//         PropTypes.oneOfType([PropTypes.array, PropTypes.string, PropTypes.bool])
//     ).isRequired,
//     dispatch: PropTypes.func.isRequired
// };
