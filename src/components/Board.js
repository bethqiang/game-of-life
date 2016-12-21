import React from 'react';

import Cell from '../components/Cell';

const Board = props => {
  console.log(props);
  return (
    <div>
      <table>
        <tbody>
          {props.board.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <Cell key={j} x={props.board[i][j].cellX} y={props.board[i][j].cellY} />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Board;
