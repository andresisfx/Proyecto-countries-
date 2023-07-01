// import { createStore, applyMiddleware} from "redux";
// import rootReducer from "./reducer";
// import thunkMiddleware from "redux-thunk";
// import {composeWithDevTools} from "redux-devTools-extension"

// const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(thunkMiddleware))
// );

// export default store;

import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));
export default store;