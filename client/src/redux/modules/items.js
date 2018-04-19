import initialStore from '../../../inventory';


//Definiing actions
const GET_FETCH_ITEMS = "GET_FETCH_ITEMS";
const GET_FETCH_PROFILE_ITEMS = "GET_FETCH_PROFILE_ITEMS";

//Creating action creators

export const get_fetch_items = () => ({
  type: GET_FETCH_ITEMS
});

export const get_fetch_profile_items = () => ({
  type: GET_FETCH_PROFILE_ITEMS
})

//creating initial state
const initialState = {
  items: initialStore.items
}

//creating reducer

export default (state = initialState, action) => {
  switch(action.type) {
    case GET_FETCH_ITEMS: {

    }
    case GET_FETCH_PROFILE_ITEMS: {

    }
    default: {
      return {
        ...state
      };
    }
  }
}