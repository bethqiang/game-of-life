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
                <Cell key={j}
                  status={props.board[i][j].status}
                  handleClick={() => props.toggleCell(i, j)} />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Board;
