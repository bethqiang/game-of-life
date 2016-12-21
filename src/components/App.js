import React from 'react';

import GenCounter from './GenCounter';
import BoardContainer from '../containers/BoardContainer';
import Controls from './Controls';

const App = () => {
  return (
    <div>
      <h1>Game of Life, woo!</h1>
      <GenCounter />
      <BoardContainer />
      <Controls />
    </div>
  );
};

export default App;
