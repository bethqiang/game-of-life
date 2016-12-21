import { TOGGLE_CELL } from '../constants';

import { makeGrid } from '../utils';

const gridHeight = 20;
const gridWidth = 20;

// might need to make initial state an object - leaving it as an array for now, but just a note to self
const initialGridState = makeGrid(gridHeight, gridWidth);

export default (state = initialGridState, action) => {

  const newState = Object.assign([], state);

  switch (action.type) {

    case TOGGLE_CELL: {
      const cell = newState[action.xCoord][action.yCoord];
      if (cell.status === 'alive') cell.status = 'dead';
      else if (cell.status === 'dead') cell.status = 'alive';
      break;
    }

    default:
      return state;
  }

  return newState;
};
