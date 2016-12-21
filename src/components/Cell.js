import React from 'react';

const Cell = props => {
  return (
    <td>{`(${props.x}, ${props.y})`}</td>
  );
};

export default Cell;
