/**
 *
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  let p = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        p += 4 - countNeighbours(grid, i, j);
      }
    }
  }

  return p;
};

function countNeighbours(grid, i, j) {
  let neighbours = 0;

  if (i - 1 >= 0 && grid[i - 1][j]) neighbours++;
  if (i + 1 < grid.length && grid[i + 1][j]) neighbours++;
  if (j - 1 >= 0 && grid[i][j - 1]) neighbours++;
  if (j + 1 < grid[0].length && grid[i][j + 1]) neighbours++;

  return neighbours;
}

const grid = [
  [1, 1],
  [1, 1],
];

const result = islandPerimeter(grid);
console.log("result", result);
