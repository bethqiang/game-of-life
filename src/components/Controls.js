import React from 'react';

const Controls = () => {
  return (
    <div id="button-div">
      <button className="btn btn-default"><i className="glyphicon glyphicon-step-forward"></i></button>
      <button className="btn btn-default"><i className="glyphicon glyphicon-play"></i></button>
      <button className="btn btn-default"><i className="glyphicon glyphicon-stop"></i></button>
      <button className="btn btn-default"><i className="glyphicon glyphicon-remove"></i></button>
      <button className="btn btn-default"><i className="glyphicon glyphicon-random"></i></button>
    </div>
  );
};

export default Controls;
