import React from 'react';

import GenCounter from './GenCounter';
import BoardContainer from '../containers/BoardContainer';
import ButtonsContainer from '../containers/ButtonsContainer';

const App = () => {
  return (
    <div>
      <h1>Game of Life, woo!</h1>
      <GenCounter />
      <BoardContainer />
      <ButtonsContainer />
    </div>
  );
};

export default App;
