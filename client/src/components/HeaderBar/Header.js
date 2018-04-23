import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

import logo from '../../images/boomtown-logo.svg';
import './styles.css';
import TagFilterField from '../TagFilterField/';

class Header extends Component {
    getTags = items => {
        const tags = [];
        if (items.length && items[0] !== undefined) {
            items.map(item => {
                if (item.tags !== undefined) {
                    if (!item.tags.includes(undefined)) {
                        item.tags.map(tag => {
                            if (!tags.includes(tag)) {
                                tags.push(tag);
                            }
                        });
                    }
                }
            });
        }
        return tags;
    };

    render() {
        const tags = this.getTags(this.props.itemsData.items);
        return (
            <Paper className={'header-bar'}>
                <div className={'home-filter-area'}>
                    <Link to={'/'} className={'home-logo'}>
                        <img
                            src={logo}
                            alt="Boomtown Logo"
                            className={'home-logo'}
                        />
                    </Link>
                    {this.props.profileItems.length === 0 &&
                        tags.length && (
                            <TagFilterField
                                tags={tags}
                                selectedTags={this.props.itemsData.itemFilters}
                            />
                        )}
                </div>
                <div>
                    <RaisedButton
                        label="My Profile"
                        className={'my-profile-button'}
                        primary
                    />
                    <RaisedButton label="Logout" secondary />
                </div>
            </Paper>
        );
    }
}

Header.defaultProps = {
    profileItems: []
};

Header.propTypes = {
    itemsData: PropTypes.objectOf(
        PropTypes.oneOfType([PropTypes.array, PropTypes.string, PropTypes.bool])
    ).isRequired,
    profileItems: PropTypes.arrayOf(PropTypes.object)
};

export default connect(state => ({
    itemsData: state.itemsData,
    profileItems: state.profileItems.profileItems
}))(Header);
