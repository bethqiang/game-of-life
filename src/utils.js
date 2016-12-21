export const makeGrid = (height, width, randomize = true) => {
  let grid = [];
  for (let yCoord = 0; yCoord < height; yCoord++) {
    let row = [];
    for (let xCoord = 0; xCoord < width; xCoord++) {
      let status;
      if (randomize) {
        if (Math.random() > 0.75) status = 1;
        else status = 0;
      }
      row.push({
        xCoord,
        yCoord,
        status
      });
    }
    grid.push(row);
  }
  return grid;
};

const getLivingNeighbors = (xCoord, yCoord, grid = []) => {

  const height = grid.length;
  const width = grid[0].length;

  // If a cell is at the edge of the grid, the cell on the opposite edge will be its neighbor
  const left = xCoord - 1 < 0 ? (width - 1) : (xCoord - 1);
  const right = xCoord + 1 === width ? 0 : (xCoord + 1);
  const up = yCoord - 1 < 0 ? (height - 1) : (yCoord - 1);
  const down = yCoord + 1 === height ? 0 : (yCoord + 1);

  let count = 0;

  count += grid[up][left].status;
  count += grid[up][yCoord].status;
  count += grid[up][right].status;
  count += grid[xCoord][left].status;
  count += grid[xCoord][right].status;
  count += grid[down][left].status;
  count += grid[down][yCoord].status;
  count += grid[down][right].status;

  return count;
};

// some repetition here and maybe not the most idiomatic redux way to do it - refactor later
export const stepForward = (grid = []) => {

  const height = grid.length;
  const width = grid[0].length;
  const newGrid = [];
  let status;

  for (let yCoord = 0; yCoord < height; yCoord++) {
    let newRow = [];
    for (let xCoord = 0; xCoord < width; xCoord++) {
      let currStatus = grid[xCoord][yCoord].status;
      let count = getLivingNeighbors(xCoord, yCoord, grid);
      if (currStatus && (count === 2 || count === 3)) {
        status = 1;
      } else if (!currStatus && count === 3) {
        status = 1;
      } else {
        status = 0;
      }
      newRow.push({
        xCoord,
        yCoord,
        status
      });
    }
    newGrid.push(newRow);
  }
  return newGrid;
};
