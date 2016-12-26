import React from 'react';

const GenCounter = props => {
  return (
    <div id="gen-counter-div">
      <h4>Generations: {props.genCounter.count}</h4>
    </div>
  );
};

export default GenCounter;
