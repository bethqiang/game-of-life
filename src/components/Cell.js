import React from 'react';

const Cell = props => {
  return (
    <td id={props.id} className={props.status === 'alive' ? 'alive' : ''}
      onClick={props.handleClick}></td>
  );
};

export default Cell;
