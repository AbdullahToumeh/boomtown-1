import React, { Component } from "react";
import Items from './items';
import ItemCard from '../../components/ItemCard';
import Header from '../../components/HeaderBar/';

export default class ItemsContainer extends Component {
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
      console.log(this.state.itemsData)
    }).then(() => this.setState({isLoading: false}))
    .catch(error => console.log(error));
  }

  render() {  
    return (
      <div>
        <Header />
        <Items itemsData={this.state.itemsData}/>
      </div>
    )
  }
}