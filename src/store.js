import { createStore, applyMiddleware, combineReducers } from 'redux';
import createLogger from 'redux-logger';

import boardReducer from './reducers/board-reducer';

const reducers = combineReducers({
  board: boardReducer
});

const logger = createLogger();
export default createStore(reducers, applyMiddleware(logger));
