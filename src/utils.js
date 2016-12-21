export const makeGrid = (height, width, randomize = true) => {
  let grid = [];
  for (let yCoord = 0; yCoord < height; yCoord++) {
    let row = [];
    for (let xCoord = 0; xCoord < width; xCoord++) {
      let status;
      if (randomize) {
        if (Math.random() > 0.75) status = 'alive';
        else status = 'dead';
      }
      row.push({
        xCoord,
        yCoord,
        id: `${xCoord}-${yCoord}`,
        status
      });
    }
    grid.push(row);
  }
  return grid;
};

const getLivingNeighbors = (xCoord, yCoord) => {
  let count = 0;
  for (let x = xCoord - 1; x <= xCoord + 1; x++) {
    for (let y = yCoord - 1; y <= yCoord + 1; y++) {
      const neighborCell = document.getElementById(`${xCoord}-${yCoord}`);
      // neighborCells are null
      if (!(x === xCoord && y === yCoord) && neighborCell !== null && neighborCell.className === 'alive') {
        count++;
      }
    }
  }
  console.log(count);
};

// some repetition here and maybe not the most idiomatic redux way to do it - refactor later
export const stepForward = (grid = [], height, width) => {
  let newGrid = [];
  let status;
  for (let yCoord = 0; yCoord < height; yCoord++) {
    let newRow = [];
    for (let xCoord = 0; xCoord < width; xCoord++) {
      let currStatus = grid[xCoord][yCoord].status;
      console.log(grid[0][0].status);
      let count = getLivingNeighbors(xCoord, yCoord);
      if (currStatus === 'alive' && (count === 2 || count === 3)) {
        status = 'alive';
      } else if (currStatus === 'dead' && count === 3) {
        status = 'alive';
      } else {
        status = 'dead';
      }
      newRow.push({
        xCoord,
        yCoord,
        id: `${xCoord}-${yCoord}`,
        status
      });
    }
    newGrid.push(newRow);
  }
  return newGrid;
};
