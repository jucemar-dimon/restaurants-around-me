import { combineReducers } from 'redux';
import restaurants from '../modules/restaurants';

const RootReducer = combineReducers({ restaurants });

export default RootReducer;
