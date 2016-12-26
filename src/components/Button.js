import React from 'react';

const Buttons = props => {
  return (
    <span
      className="btn btn-default"
      onClick={props.handleClick}
      disabled={props.isPlaying}>
        <i className={props.icon}></i>
    </span>
  );
};

export default Buttons;
