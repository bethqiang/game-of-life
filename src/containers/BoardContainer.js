import { connect } from 'react-redux';

import Board from '../components/Board';
import { toggleCell } from '../action-creators';

const mapStateToProps = state => {
  return {
    board: state.board
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleCell(xCoord, yCoord) {
      dispatch(toggleCell(xCoord, yCoord));
    }
  };
};

const BoardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);

export default BoardContainer;
