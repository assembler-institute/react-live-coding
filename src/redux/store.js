import { combinedReducer } from "./reducers";
import { legacy_createStore as createStore } from 'redux';

// const middlewares = applyMiddleware(authentication, username);

const store = createStore(combinedReducer);

export default store;