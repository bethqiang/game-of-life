import React from 'react';

import GenCounter from './GenCounter';
import BoardContainer from '../containers/BoardContainer';
import ControlsContainer from '../containers/ControlsContainer';

const App = () => {
  return (
    <div>
      <h1>Game of Life, woo!</h1>
      <GenCounter />
      <BoardContainer />
      <ControlsContainer />
    </div>
  );
};

export default App;
