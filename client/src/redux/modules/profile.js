
 
//Definiing actions
const GET_FETCH_PROFILE_ITEMS = "GET_FETCH_PROFILE_ITEMS";

//Creating action creators

export const get_fetch_profile_items = (profileItems) => ({
  type: GET_FETCH_PROFILE_ITEMS,
  payload: profileItems
})

//creating initial state
const initialState = {
  profileItems: [],
  currentUserProfile: ''
}


//CREATING OUR THUNK FETCH ACTION

export const fetchProfileItemsFromUrl = urls => dispatch => {
  const urls = ['http://localhost:3000/items', 'http://localhost:3000/users'];

  const combineItemsAndUsers = (itemsAndUsers) => {
    itemsAndUsers[0].map(item => {
      itemsAndUsers[1].map(user => {
        if (user.id === item.itemowner) {
          item.itemowner = user;
        }
      })
    })
    return itemsAndUsers[0];
  }

  const matchItemsToProfile = (allItems) => {
    return allItems.filter(item => (item.itemowner.id === this.props.match.params.itemownerId))
  }

  Promise.all(urls.map(url =>
    fetch(url).then(resp => resp.json() )
  )).then(responses => dispatch(get_fetch_profile_items(matchItemsToProfile(combineItemsAndUsers(responses)))));

  console.log("THIS IS THE CONSOLE LOG:" + this.props);

  // let profileItems = this.state.items.filter(item => (item.itemowner.id === this.props.match.params.itemownerId))

  // dispatch(get_fetch_profile_items(profileItems));
}


//creating reducer

export default (state = initialState, action) => {
  switch(action.type) {
    case GET_FETCH_PROFILE_ITEMS: {
      const profileItems = action.payload
      return {...state, profileItems}
      break;
    }
    default: {
      return {
        ...state
      };
    }
  }
}