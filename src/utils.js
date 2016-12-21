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
        status
      });
    }
    grid.push(row);
  }
  return grid;
};
