import { combinedReducer } from "./reducers";
import { legacy_createStore as createStore } from 'redux';

// const middlewares = applyMiddleware(authentication, username); 

const store = createStore(combinedReducer);
// redux toolkit nos permitiría gestionar estados asíncronos, por ejemplo cuando tenemos que enviar una información a una base de datos

export default store;