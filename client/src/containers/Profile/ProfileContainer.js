import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Profile from './Profile';
import ItemCardList from '../../components/ItemCardList';
import { fetchProfileItemsFromUrl } from '../../redux/modules/profile';

class ProfileContainer extends Component {
  componentDidMount() {
    this.props.dispatch(fetchProfileItemsFromUrl(this.props.match.params.itemownerId));
  }

  render() {
    return (
      <div>
        {/* <Header /> */}
        <Profile profileInfo={this.props.location.state} itemInfo={this.props.items} />
        <ItemCardList itemsData={this.props.items} />
      </div>
    );
  }
}

export default connect(state => {
  return {
    items: state.profileItems.profileItems
  };
})(ProfileContainer);

ProfileContainer.propTypes = {
  items: PropTypes.arrayOf(PropTypes.array).isRequired,
  location: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,

};

