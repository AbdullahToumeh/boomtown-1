import React, {Component} from 'react';
import Profile from './Profile';
import ItemCardList from '../../components/ItemCardList';
import Header from '../../components/HeaderBar';

export default class ProfileContainer extends Component {
  constructor() {
    super()
    this.state = {
      isLoading: false,
      itemsData: []
    };
  }

  componentDidMount() {
    const urls = ['http://localhost:3000/items', 'http://localhost:3000/users'];
    this.setState({isLoading: true});
    Promise.all(urls.map(url =>
      fetch(url).then(resp => resp.json() ) 
    )).then(responses => {
      responses[0].map(item => {
        responses[1].map(user => {
          if (user.id === item.itemowner) {
            item.itemowner = user;
          }
        })
      });
      this.setState({ itemsData: responses[0] });
      let profileItems = this.state.itemsData.filter(item => (item.itemowner.id === this.props.match.params.itemownerId))
      this.setState({itemsData: profileItems});
    }).then(() => this.setState({isLoading: false}))
    .catch(error => console.log(error));

  }



  render() {
    return (
      <div>
        <Header />
        <Profile profileInfo={this.props.location.state} itemInfo={this.state.itemsData}/>
        <ItemCardList itemsData={this.state.itemsData} />
      </div>
    )
  }
}