// action is dispatched
// --> reducers update state (store)
// reducers = listeners
// one reducer per "pieve of state" (piece of data from backend / model)

// make root reducer

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import posts from './posts';
import comments from './comments';

const rootReducer = combineReducers({
  posts,
  comments,
  routing: routerReducer
});

export default rootReducer;

