import { TOGGLE_CELL } from '../constants';

export const toggleCell = (xCoord, yCoord) => {
  return {
    type: TOGGLE_CELL,
    xCoord,
    yCoord
  };
};
