// empezamos por este archivo después de hacer la carpeta counter
// Hacemos la instalación de las librerías con 'npm i redux react-redux'
import { combineReducers } from 'redux';
import counterReducer from './counter/reducer';

export const combinedReducer = combineReducers({
  counter: counterReducer
})