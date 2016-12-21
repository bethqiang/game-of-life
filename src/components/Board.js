import React from 'react';

import Cell from '../components/Cell';

const Board = props => {
  return (
    <div>
      <table>
        <tbody>
          {props.board.map((row, yCoord) => (
            <tr key={yCoord}>
              {row.map((cell, xCoord) => (
                <Cell key={xCoord}
                  status={props.board[xCoord][yCoord].status}
                  handleClick={() => props.toggleCell(xCoord, yCoord)} />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Board;
