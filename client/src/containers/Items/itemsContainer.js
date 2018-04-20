import React, { Component } from "react";
import Items from './items';
import ItemCard from '../../components/ItemCard';
import Header from '../../components/HeaderBar/';
import { connect } from 'react-redux';
import { fetchItemsFromUrl } from '../../redux/modules/items';

class ItemsContainer extends Component {

  componentDidMount() {
    const urls = ['http://localhost:3000/items', 'http://localhost:3000/users'];

    this.props.dispatch(fetchItemsFromUrl(urls));
  }


  render() {  
    return (
      <div>
        <Header />
        <Items itemsData={this.props.items}/>
      </div>
    )
  }
}

export default connect(state => {
  return {
    items: state.items.items
  }
})(ItemsContainer);
