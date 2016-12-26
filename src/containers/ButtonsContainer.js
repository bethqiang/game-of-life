import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from '../components/Button';
import { stepForward, clear, play } from '../action-creators/buttons';

class ButtonsContainer extends Component {
  constructor() {
    super();
    this.play = this.play.bind(this);
  }
  play() {
    let interval = setInterval(this.props.stepForward, 100);
    this.props.play(interval);
  }
  render() {
    return (
      <div id="button-div">
        <Button
          handleClick={() => this.props.stepForward()}
          icon={'glyphicon glyphicon-step-forward'}
        />
        <Button
          handleClick={() => this.play()}
          icon={'glyphicon glyphicon-play'}
        />
        <Button
          icon={'glyphicon glyphicon-stop'}
        />
        <Button
          handleClick={() => this.props.clear()}
          icon={'glyphicon glyphicon-remove'}
        />
        <Button
          icon={'glyphicon glyphicon-random'}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    board: state.board
  };
};

const mapDispatchToProps = dispatch => {
  return {
    stepForward() {
      dispatch(stepForward());
    },
    play(timer) {
      dispatch(play(timer));
    },
    clear() {
      dispatch(clear());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ButtonsContainer);
