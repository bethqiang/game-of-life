import React from 'react';

const Cell = props => {
  return (
    <td className={props.status === 'alive' ? 'alive' : ''}></td>
  );
};

export default Cell;
