import React from 'react';

import GenCounterContainer from '../containers/GenCounterContainer';
import BoardContainer from '../containers/BoardContainer';
import ButtonsContainer from '../containers/ButtonsContainer';

const App = () => {
  return (
    <div>
      <h1>Game of Life</h1>
      <GenCounterContainer />
      <BoardContainer />
      <ButtonsContainer />
    </div>
  );
};

export default App;
