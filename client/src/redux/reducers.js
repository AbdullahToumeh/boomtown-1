import { combineReducers } from 'redux';
import itemReducer from './modules/items';
import profileReducer from './modules/profile';

export default combineReducers({
  items: itemReducer,
  profileItems: profileReducer
});