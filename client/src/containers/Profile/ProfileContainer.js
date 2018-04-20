import React, {Component} from 'react';
import Profile from './Profile';
import ItemCardList from '../../components/ItemCardList';
import Header from '../../components/HeaderBar';
import { fetchProfileItemsFromUrl } from '../../redux/modules/profile';
import { connect } from 'react-redux';

class ProfileContainer extends Component {
  
  componentDidMount() {

    this.props.dispatch(fetchProfileItemsFromUrl(this.props.match.params.itemownerId))

  }



  render() {
    return (
      <div>
        <Header />
        <Profile profileInfo={this.props.location.state} itemInfo={this.props.items}/>
        <ItemCardList itemsData={this.props.items} />
      </div>
    )
  }
}

export default connect(state => {
  return {
    items: state.profileItems.profileItems
  }
})(ProfileContainer);