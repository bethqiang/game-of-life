import {
  STEP_FORWARD,
  PLAY,
  STOP,
  CLEAR,
  MAKE_RANDOM
} from '../constants';

export const stepForward = () => {
  return {
    type: STEP_FORWARD
  };
};

export const play = () => {
  return {
    type: PLAY
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
