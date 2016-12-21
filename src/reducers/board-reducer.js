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
      if (cell.status) cell.status = 0;
      else if (!cell.status) cell.status = 1;
      break;
    }

    case STEP_FORWARD:
      newState.grid = stepForward(state.grid);
      break;

    default:
      return state;
  }

  return newState;
};
