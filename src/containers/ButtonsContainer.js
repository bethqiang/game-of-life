import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from '../components/Button';
import { stepForward, play, stop, clear, makeRandom } from '../action-creators';

class ButtonsContainer extends Component {

  constructor() {
    super();
    this.play = this.play.bind(this);
  }

  componentDidMount() {
    this.start();
  }

  start() {
    this.play();
    this.props.play(this.requestID);
  }

  play() {
    this.requestID = requestAnimationFrame(this.play);
    this.props.stepForward();
  }

  stop() {
    cancelAnimationFrame(this.props.board.requestID);
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
          handleClick={() => this.props.board.isPlaying ? null : this.start()}
          icon={'glyphicon glyphicon-play'}
          isPlaying={this.props.board.isPlaying}
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
    play(requestID) {
      dispatch(play(requestID));
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
