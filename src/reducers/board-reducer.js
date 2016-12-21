import {
  TOGGLE_CELL,
  STEP_FORWARD
} from '../constants';

import { makeGrid, stepForward } from '../utils';

const gridHeight = 20;
const gridWidth = 20;

const initialGridState = {
  grid: makeGrid(gridHeight, gridWidth)
};

export default (state = initialGridState, action) => {

  const newState = Object.assign({}, state);

  switch (action.type) {

    case TOGGLE_CELL: {
      const cell = newState.grid[action.xCoord][action.yCoord];
      if (cell.status === 'alive') cell.status = 'dead';
      else if (cell.status === 'dead') cell.status = 'alive';
      break;
    }

    case STEP_FORWARD:
      newState.grid = stepForward(state.grid, gridHeight, gridWidth);
      break;

    default:
      return state;
  }

  return newState;
};
