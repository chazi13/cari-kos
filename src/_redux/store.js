import {createStore, combineReducers, applyMiddleware} from 'redux'

import dorms from './../_reducers/dorms'
import { logger,promise } from './middleware';

// this global states
const reducers = combineReducers({
  dorms
})

const store = createStore(
  reducers,
  applyMiddleware(logger, promise)
);

export default store