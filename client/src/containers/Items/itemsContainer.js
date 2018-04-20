import React, { Component } from "react";
import PropTypes from 'prop-types';
import Items from './items';
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

ItemsContainer.propTypes = {
  items: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
}