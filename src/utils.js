export const makeGrid = (height, width) => {
  let grid = [];
  for (let i = 0; i < height; i++) {
    let row = [];
    for (let j = 0; j < width; j++) {
      row.push({
        cellX: i,
        cellY: j
      });
    }
    grid.push(row);
  }
  return grid;
};
