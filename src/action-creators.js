import {
  TOGGLE_CELL,
  STEP_FORWARD,
  PLAY,
  STOP,
  CLEAR,
  MAKE_RANDOM
} from './constants';

export const toggleCell = (xCoord, yCoord) => {
  return {
    type: TOGGLE_CELL,
    xCoord,
    yCoord
  };
};

export const stepForward = () => {
  return {
    type: STEP_FORWARD
  };
};

export const play = (requestID) => {
  return {
    type: PLAY,
    requestID
  };
};

export const stop = () => {
  return {
    type: STOP
  };
};

export const clear = () => {
  return {
    type: CLEAR
  };
};

export const makeRandom = () => {
  return {
    type: MAKE_RANDOM
  };
};
