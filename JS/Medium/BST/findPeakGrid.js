/** 1901
 * @param {number[][]} mat
 * @return {number[]}
 */
var findPeakGrid = function (mat) {
  let m = mat.length;
  let n = mat[0].length;

  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      let top = row == 0 ? -1 : mat[row - 1][col];
      let bottom = row == m - 1 ? -1 : mat[row + 1][col];
      let left = col == 0 ? -1 : mat[row][col - 1];
      let right = col == n - 1 ? -1 : mat[row][col + 1];

      let curr = mat[row][col];

      if (curr > top && curr > bottom && curr > left && curr > right) {
        return [row, col];
      }
    }
  }
};
var findPeakGrid2 = function (mat) {
  let m = mat.length;
 // let n = mat[0].length;

  for (let row = 0; row < m; row++) {
    let maxOfCurrRow = Math.max(...mat[row]);

    let col = mat[row].indexOf(maxOfCurrRow);

    let top = row == 0 ? -1 : mat[row - 1][col];
    let bottom = row == m - 1 ? -1 : mat[row + 1][col];
    // let left = col == 0 ? -1 : mat[row][col - 1];
    // let right = col == n - 1 ? -1 : mat[row][col + 1];

    let curr = mat[row][col];

    if (curr > top && curr > bottom) {
      return [row, col];
    }
  }
};


var findPeakGrid = function(mat) {
    let m = mat.length;
    let n = mat[0].length;

    let top = 0;
    let bottom = m - 1;

    while (top <= bottom) {
        let midRow = Math.floor((top + bottom) / 2);

        // Find the column index of the max element in this row
        let maxCol = 0;
        for (let col = 1; col < n; col++) {
            if (mat[midRow][col] > mat[midRow][maxCol]) {
                maxCol = col;
            }
        }

        let curr = mat[midRow][maxCol];
        let topNeighbor = midRow === 0 ? -1 : mat[midRow - 1][maxCol];
        let bottomNeighbor = midRow === m - 1 ? -1 : mat[midRow + 1][maxCol];

        if (curr > topNeighbor && curr > bottomNeighbor) {
            return [midRow, maxCol];  // ✅ Peak found
        } else if (topNeighbor > curr) {
            bottom = midRow - 1;     // Move up
        } else {
            top = midRow + 1;        // Move down
        }
    }
};

 mat = [[10,20,15],[21,30,14],[7,16,32]];

console.log(findPeakGrid2(mat));
