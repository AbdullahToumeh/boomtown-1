// Defining actions
const GET_PROFILE_ITEMS = 'GET_PROFILE_ITEMS';
const GET_IS_LOADING = 'GET_IS_LOADING';
const GET_ERROR = 'GET_ERROR';

// Creating action creators

export const get_profile_items = items => ({
    type: GET_PROFILE_ITEMS,
    payload: items
});

export const get_is_loading = () => ({
    type: GET_IS_LOADING
});

export const get_error = error => ({
    type: GET_ERROR,
    payload: error
});

// creating initial state
const initialState = {
    profileItems: [],
    isLoading: false,
    error: ''
};

// CREATING OUR THUNK FETCH ACTION

export const fetchProfileItemsFromUrl = profileId => dispatch => {
    const urls = ['http://localhost:3001/items', 'http://localhost:3001/users'];

    const combineItemsAndUsers = itemsAndUsers => {
        itemsAndUsers[0].map(item => {
            itemsAndUsers[1].map(user => {
                if (user.id === item.itemowner) {
                    item.itemowner = user;
                }
            });
        });
        return itemsAndUsers[0];
    };
    dispatch(get_is_loading());

    const matchProfileItems = (items, profileId) => {
        return items.filter(item => item.itemowner.id === profileId);
    };

    Promise.all(urls.map(url => fetch(url).then(resp => resp.json())))
        .then(responses =>
            dispatch(
                get_profile_items(
                    matchProfileItems(
                        combineItemsAndUsers(responses),
                        profileId
                    )
                )
            )
        )
        .catch(error => dispatch(get_error(error)));
};

// creating reducer

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_PROFILE_ITEMS: {
            const profileItems = [...action.payload];
            return { ...state, profileItems, isLoading: false };
        }
        case GET_IS_LOADING: {
            return { ...state, isLoading: true };
        }
        case GET_ERROR: {
            return { ...state, isLoading: false, error: action.payload };
        }
        default: {
            return {
                ...state
            };
        }
    }
};
