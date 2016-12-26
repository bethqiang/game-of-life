import {
  STEP_FORWARD,
  CLEAR,
  MAKE_RANDOM
} from '../constants';

const initialCounterState = {
  count: 0
};

const genCounter = (state = initialCounterState, action) => {

  const newState = Object.assign({}, state);

  switch (action.type) {

    case STEP_FORWARD:
      newState.count = state.count + 1;
      break;

    case CLEAR:
      newState.count = 0;
      break;

    case MAKE_RANDOM:
      newState.count = 0;
      break;

    default:
      return state;
  }

  return newState;
};

export default genCounter;
