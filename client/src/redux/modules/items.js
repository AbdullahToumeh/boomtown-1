
 
//Definiing actions
const GET_FETCH_ITEMS = "GET_FETCH_ITEMS";
//Creating action creators

export const get_fetch_items = (items) => ({
  type: GET_FETCH_ITEMS,
  payload: items
});

//creating initial state
const initialState = {
  items: []
}


//CREATING OUR THUNK FETCH ACTION
export const fetchItemsFromUrl = urls => dispatch => {
  // const urls = ['http://localhost:3000/items', 'http://localhost:3000/users'];

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

  Promise.all(urls.map(url =>
    fetch(url).then(resp => resp.json() )
  )).then(responses => dispatch(get_fetch_items(combineItemsAndUsers(responses))))

};

//creating reducer

export default (state = initialState, action) => {
  switch(action.type) {
    case GET_FETCH_ITEMS: {
      const items = action.payload
      return {...state, items}
      break;
    }
    default: {
      return {
        ...state
      };
    }
  }
}