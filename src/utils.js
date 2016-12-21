export const makeGrid = (height, width, randomize = true) => {
  let grid = [];
  for (let i = 0; i < height; i++) {
    let row = [];
    for (let j = 0; j < width; j++) {
      let status;
      if (randomize) {
        if (Math.random() > 0.75) status = 'alive';
        else status = 'dead';
      }
      row.push({
        cellX: i,
        cellY: j,
        status
      });
    }
    grid.push(row);
  }
  return grid;
};
