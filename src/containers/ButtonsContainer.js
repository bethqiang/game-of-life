import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from '../components/Button';
import { stepForward, play, stop, clear, makeRandom } from '../action-creators';

class ButtonsContainer extends Component {

  componentDidMount() {
    this.play();
  }

  play() {
    let interval = setInterval(this.props.stepForward, 100);
    this.props.play(interval);
  }

  stop() {
    clearInterval(this.props.board.timer);
    this.props.stop();
  }

  clear() {
    if (this.props.board.isPlaying) {
      this.stop();
    }
    this.props.clear();
  }

  makeRandom() {
    if (this.props.board.isPlaying) {
      this.stop();
    }
    this.props.makeRandom();
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
          handleClick={() => this.stop()}
          icon={'glyphicon glyphicon-stop'}
        />
        <Button
          handleClick={() => this.clear()}
          icon={'glyphicon glyphicon-remove'}
        />
        <Button
          handleClick={() => this.makeRandom()}
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
    stop() {
      dispatch(stop());
    },
    clear() {
      dispatch(clear());
    },
    makeRandom() {
      dispatch(makeRandom());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ButtonsContainer);
