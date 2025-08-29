/** 200
 * @param {character[][]} grid
 * @return {number}
 */

//DFS
var numIslands = function (grid) {
  let count = 0;
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] == "1") {
        //start DFS from each unvisited land cell
        DFS(grid, row, col);
        count++;
      }
    }
  }
  return count;
};

let DFS = (grid, row, col) => {
  //if node is out of bound or equal to '0' return
  if (
    row < 0 ||
    row >= grid.length ||
    col < 0 ||
    col >= grid[0].length ||
    grid[row][col] == "0"
  )
    return;

  grid[row][col] = "0"; //Mark the current cell as water to indicate it's visited

  //Explore all four directions (Up, bottom, left, right)
  DFS(grid, row + 1, col);
  DFS(grid, row - 1, col);
  DFS(grid, row, col + 1);
  DFS(grid, row, col - 1);
};
