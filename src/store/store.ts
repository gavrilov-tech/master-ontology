import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { reducers } from './reducers';

console.warn('process.env.NODE_ENV', process.env.NODE_ENV)

export const store = createStore(reducers, {},
  process.env.NODE_ENV === 'production' ?
  applyMiddleware(thunk) :
  composeWithDevTools(applyMiddleware(thunk))
);
