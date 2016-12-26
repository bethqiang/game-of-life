import {
  TOGGLE_CELL,
  STEP_FORWARD,
  PLAY,
  STOP,
  CLEAR,
  MAKE_RANDOM
} from '../constants';

import { makeGrid, stepForward } from '../utils';

const gridHeight = 20;
const gridWidth = 30;

const initialGridState = {
  grid: makeGrid(gridHeight, gridWidth),
  timer: null,
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
      newState.grid = stepForward(state.grid);
      break;

    case PLAY:
      newState.isPlaying = true;
      newState.timer = action.timer;
      break;

    case STOP:
      newState.isPlaying = false;
      newState.timer = null;
      break;

    case CLEAR:
      newState.grid = makeGrid(gridHeight, gridWidth, false, true);
      break;

    case MAKE_RANDOM:
      newState.grid = makeGrid(gridHeight, gridWidth, true);
      break;

    default:
      return state;
  }

  return newState;
};
