import { connect } from 'react-redux';

import GenCounter from '../components/GenCounter';

const mapStateToProps = state => {
  return {
    genCounter: state.genCounter
  };
};

const GenCounterContainer = connect(
  mapStateToProps
)(GenCounter);

export default GenCounterContainer;
