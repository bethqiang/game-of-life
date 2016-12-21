import React from 'react';

import Cell from '../components/Cell';

const Board = props => {
  return (
    <div>
      <table>
        <tbody>
          {props.board.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <Cell key={j} x={props.board[i][j].cellX} y={props.board[i][j].cellY} status={props.board[i][j].status} />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Board;
