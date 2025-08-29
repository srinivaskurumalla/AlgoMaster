/**994
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  let m = grid.length;
  let n = grid[0].length;

  let time = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] == 2) {
        //if curr orange is rotten make neighbors as rotten
        let top = i > 0 ? grid[i - 1][j] : null;
        let bottom = i < m - 1 ? grid[i + 1][j] : null;
        let left = j > 0 ? grid[i][j - 1] : null;
        let right = j < n - 1 ? grid[i][j + 1] : null;

        if (top == 1 || bottom == 1 || left == 1 || right == 1) time += 1;

        if (top == 1) {
          grid[i - 1][j] = 2;
        }
        if (bottom == 1) {
          grid[i + 1][j] = 2;
        }
        if (left == 1) {
          grid[i][j - 1] = 2;
        }
        if (right == 1) {
          grid[i][j + 1] = 2;
        }
      }
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] == 1) {
        return -1;
      }
    }
  }
  return time;
};

var orangesRotting = function (grid) {
  let rows = grid.length;
  let cols = grid[0].length;

  let minutes = 0;
  let q = [];
  //push all the rotten oranges to q
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] == 2) {
        q.push([i, j, minutes]);
      }
    }
  }

  //Mark all adjacent oranges as rotten till the q is empty
  while (q.length > 0) {
    let [x, y, m] = q.shift();
    let top = x == 0 ? null : [x - 1, y, m + 1];
    let bottom = x == rows - 1 ? null : [x + 1, y, m + 1];
    let left = y == 0 ? null : [x, y - 1, m + 1];
    let right = y == cols - 1 ? null : [x, y + 1, m + 1];

    if (top && grid[top[0]][top[1]] == 1) {
      grid[top[0]][top[1]] = 2;
      q.push(top);
    }
    if (bottom && grid[bottom[0]][bottom[1]] == 1) {
      grid[bottom[0]][bottom[1]] = 2;
      q.push(bottom);
    }
    if (left && grid[left[0]][left[1]] == 1) {
      grid[left[0]][left[1]] = 2;
      q.push(left);
    }
    if (right && grid[right[0]][right[1]] == 1) {
      grid[right[0]][right[1]] = 2;
      q.push(right);
    }

    minutes = Math.max(minutes, m);
  }
  //check if we have any fresh oranges
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] == 1) {
        return -1;
      }
    }
  }
  return minutes;
};


//same but simplication
var orangesRotting = function (grid) {
  let rows = grid.length;
  let cols = grid[0].length;

  let minutes = 0;
  let q = [];
  let fresh = 0;

  // Step 1. Collect rotten oranges and count fresh ones
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] == 2) q.push([i, j, 0]);
      if (grid[i][j] == 1) fresh++;
    }
  }

  // Step 2. BFS
  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  //Mark all adjacent oranges as rotten till the q is empty
  while (q.length > 0) {
    let [x, y, m] = q.shift();
    minutes = Math.max(minutes, m);

    for (let [dx, dy] of dirs) {
      const nx = x + dx;
      const ny = y + dy;

      if (nx >= 0 && nx < rows && ny >= 0 && ny < cols && grid[nx][ny] == 1) {
        grid[nx][ny] = 2;
        fresh--;
        q.push([nx, ny, m + 1]);
      }
    }
  }
  return fresh == 0 ? minutes : -1;
};
grid = [
  [2, 0, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 1, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 1, 1, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 0, 0, 0, 1, 0, 1],
  [1, 0, 1, 1, 1, 1, 1, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];
console.log(orangesRotting(grid));
