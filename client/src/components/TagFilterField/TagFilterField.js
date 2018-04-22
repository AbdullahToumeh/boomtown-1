import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import { get_itemFilters } from '../../redux/modules/items';

const TagFilterField = ({ tags, dispatch, selectedTags }) => {
  function handleFilter(value) {
    dispatch(get_itemFilters(value));
  }

  return (
    <SelectField multiple hintText={'Filter by Tag'} onChange={(event, index, value) => handleFilter(value[0])}>
      {tags &&
        tags.map((tag, index) => (
          <MenuItem
            key={index}
            value={tag}
            insetChildren
            primaryText={tag}
            checked={selectedTags && selectedTags.indexOf(tag) > -1}
          />
        ))
      }
    </SelectField>
  );
};

TagFilterField.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedTags: PropTypes.arrayOf(PropTypes.string).isRequired,
  dispatch: PropTypes.func.isRequired
};

// using this to connect DISPATCH to the TagFilterField
export default connect()(TagFilterField);
