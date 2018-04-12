import React, { Component } from "react";
import Items from './items';
import ItemCard from '../../components/ItemCard';

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
    Promise.all(urls.map(url =>
      fetch(url).then(resp => resp.json() ) 
    )).then(objects => {
      console.log(objects);
      objects[0].map(item => {
        objects[1].map(profile => {
          if (profile.id === item.itemowner) {
            item.itemowner = profile;
          }
        })
      });
      this.setState({ itemsData: objects[0] });
      console.log(this.state.itemsData)
    })
  }

  render() {  
    return (
      <div>
        <Items itemsData={this.itemsData}/>
      </div>
    )
  }
}