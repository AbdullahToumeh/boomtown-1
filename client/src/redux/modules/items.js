
 
//Definiing actions
const GET_FETCH_ITEMS = "GET_FETCH_ITEMS";
const GET_IS_LOADING = "GET_IS_LOADING";
const GET_ERROR = "GET_ERROR";
const GET_ITEM_FILTERS = "GET_ITEM_FILTERS";


//Creating action creators
export const get_fetch_items = (items) => ({
  type: GET_FETCH_ITEMS,
  payload: items
});

export const get_isLoading = () => ({
  type: GET_IS_LOADING
});

export const get_error = (error) => ({
  type: GET_ERROR,
  payload: error
});

export const get_itemFilters = (itemFilters) => ({
  type: GET_ITEM_FILTERS,
  payload: itemFilters
});


//creating initial state
const initialState = {
  items: [],
  isLoading: false,
  itemFilters: [],
  error: ''
};


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
  dispatch(get_isLoading());
  Promise.all(urls.map(url =>
    fetch(url).then(resp => resp.json() )
  ))
  .then(responses => dispatch(get_fetch_items(combineItemsAndUsers(responses))))
  .catch(error => dispatch(get_error(error)));

};

//creating reducer

export default (state = initialState, action) => {
  switch(action.type) {
    case GET_FETCH_ITEMS: {
      const items = action.payload
      return {...state, items, isLoading: false, error: ''};
      break;
    }
    case GET_IS_LOADING: {
      return {...state, isLoading: true, error: ''};
      break;
    }
    case GET_ITEM_FILTERS: {
      let itemFilters = [...state.itemFilters];
      if (!itemFilters.includes(action.payload)) {
        itemFilters.push(action.payload);
      }
      else {
        //remove the filter tag from the array
      }
      return {...state, itemFilters};
      break;
    }
    case GET_ERROR: {
      return {...state, isLoading: false, error: action.payload};
      break;
    }
    default: {
      return {
        ...state
      };
    }
  }
}