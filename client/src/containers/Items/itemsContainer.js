import React, { Component } from "react";
import PropTypes from 'prop-types';
import Items from './items';
import Header from '../../components/HeaderBar/';
import { connect } from 'react-redux';
import { fetchItemsFromUrl } from '../../redux/modules/items';

import './style.css';

class ItemsContainer extends Component {

  componentDidMount() {
    const urls = ['http://localhost:3000/items', 'http://localhost:3000/users'];

    this.props.dispatch(fetchItemsFromUrl(urls));
    console.log("ISLOADING: " + this.props.itemsData.isLoading);
  }

  filterItems = itemsData => {
    if (itemsData.itemFilters.length > 0) {
      let filteredItems = itemsData.items.filter(item => {
        return item.tags.filter(tag => 
          itemsData.itemFilters.find(filter => filter === tag)
        ).length;
      });
      return filteredItems;
    }
    return itemsData.items
  }


  render() {  
    return (
      <div>
        {
          (this.props.itemsData.isLoading) ? <p>Loading...</p> : <Items itemsData={this.filterItems(this.props.itemsData)}/>
        }
      </div>
    )
  }
}

export default connect(state => {
  return {
    itemsData: state.itemsData
  }
})(ItemsContainer);

ItemsContainer.propTypes = {
  itemsData: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
}