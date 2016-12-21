import { makeGrid } from '../utils';

const gridHeight = 20;
const gridWidth = 20;

const initialGridState = makeGrid(gridHeight, gridWidth);

export default (state = initialGridState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
