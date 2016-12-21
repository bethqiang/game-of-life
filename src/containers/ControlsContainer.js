import { connect } from 'react-redux';

import Controls from '../components/Controls';
import { stepForward } from '../action-creators/controls';

const mapStateToProps = state => {
  return {
    board: state.board
  };
};

const mapDispatchToProps = dispatch => {
  return {
    stepForward() {
      dispatch(stepForward());
    }
  };
};

const ControlsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Controls);

export default ControlsContainer;
