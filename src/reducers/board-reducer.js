import {
  TOGGLE_CELL,
  STEP_FORWARD,
  PLAY,
  STOP,
  CLEAR,
  MAKE_RANDOM
} from '../constants';

import makeGrid from '../utils';

const gridHeight = 20;
const gridWidth = 30;

const initialGridState = {
  grid: makeGrid('random', gridHeight, gridWidth),
  requestID: null,
  isPlaying: false
};

export default (state = initialGridState, action) => {

  const newState = Object.assign({}, state);

  switch (action.type) {

    case TOGGLE_CELL: {
      const cell = newState.grid[action.yCoord][action.xCoord];
      if (cell.status) cell.status = 0;
      else if (!cell.status) cell.status = 1;
      break;
    }

    case STEP_FORWARD:
      newState.grid = makeGrid('next', gridHeight, gridWidth, state.grid);
      break;

    case PLAY:
      newState.isPlaying = true;
      newState.requestID = action.requestID;
      break;

    case STOP:
      newState.isPlaying = false;
      newState.requestID = null;
      break;

    case CLEAR:
      newState.grid = makeGrid('clear', gridHeight, gridWidth);
      break;

    case MAKE_RANDOM:
      newState.grid = makeGrid('random', gridHeight, gridWidth);
      break;

    default:
      return state;
  }

  return newState;
};
