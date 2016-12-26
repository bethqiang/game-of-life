import { createStore, applyMiddleware, combineReducers } from 'redux';
import createLogger from 'redux-logger';

import boardReducer from './reducers/board-reducer';
import genCounterReducer from './reducers/gencounter-reducer';

const reducers = combineReducers({
  board: boardReducer,
  genCounter: genCounterReducer
});

const logger = createLogger();
export default createStore(reducers, applyMiddleware(logger));
