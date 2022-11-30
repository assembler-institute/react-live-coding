import { combineReducers } from 'redux';
import counterReducer from './counter/reducer';

export const combinedReducer = combineReducers({
  counter: counterReducer
})