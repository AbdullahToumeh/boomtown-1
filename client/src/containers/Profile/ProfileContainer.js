import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import LoadingWheel from '../../components/LoadingWheel';
import Profile from './Profile';
import ItemCardList from '../../components/ItemCardList';
import { fetchProfileItemsFromUrl } from '../../redux/modules/profile';

class ProfileContainer extends Component {
    componentDidMount() {
        this.props.dispatch(
            fetchProfileItemsFromUrl(this.props.match.params.itemownerId)
        );
    }

    render() {
        return (
            <div>
                <Profile
                    profileInfo={this.props.location.state}
                    itemInfo={this.props.itemsData.profileItems}
                />
                {this.props.itemsData.isLoading ? (
                    <LoadingWheel />
                ) : (
                    <ItemCardList
                        itemsData={this.props.itemsData.profileItems}
                    />
                )}
            </div>
        );
    }
}

ProfileContainer.defaultProps = {
    match: {}
};

export default connect(state => ({
    itemsData: state.profileItems
}))(ProfileContainer);

ProfileContainer.propTypes = {
    itemsData: PropTypes.objectOf(
        PropTypes.oneOfType([PropTypes.array, PropTypes.bool, PropTypes.string])
    ).isRequired,
    location: PropTypes.objectOf(
        PropTypes.oneOfType([PropTypes.string, PropTypes.object])
    ).isRequired,
    dispatch: PropTypes.func.isRequired,
    match: PropTypes.objectOf(
        PropTypes.oneOfType([
            PropTypes.bool,
            PropTypes.object,
            PropTypes.string
        ])
    )
};
