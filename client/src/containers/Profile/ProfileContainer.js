import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import LoadingWheel from '../../components/LoadingWheel';
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
        <Profile profileInfo={this.props.location.state} itemInfo={this.props.itemsData.profileItems} />
        {
          (this.props.itemsData.isLoading) ?
            <p><LoadingWheel /></p>
            :
            <ItemCardList itemsData={this.props.itemsData.profileItems} />
        }
      </div>
    );
  }
}

export default connect(state => {
  return {
    itemsData: state.profileItems
  };
})(ProfileContainer);

ProfileContainer.propTypes = {
  items: PropTypes.arrayOf(PropTypes.array).isRequired,
  location: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,

};

