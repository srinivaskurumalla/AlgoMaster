/** 74
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

//Two binary searches

var searchMatrix = function (matrix, target) {
  let rows = matrix.length;
  let cols = matrix[0].length;

  let l = 0;
  let r = rows - 1;

  while (l <= r) {
    //picking middle row
    let m = l + Math.floor((r - l) / 2);

    let currL = 0;
    let currR = cols - 1;

    while (currL <= currR) {
      let currM = currL + Math.floor((currR - currL) / 2);

      if (matrix[m][currM] == target) return true;
      //check whether target is there in curr row
      if (matrix[m][currL] <= target && target <= matrix[m][currR]) {
        if (matrix[m][currM] < target) {
          currL = currM + 1;
        } else {
          currR = currM - 1;
        }
      } else if (matrix[m][currL] > target) {
        r = m - 1;
        break;
      } else {
        l = m + 1;
        break;
      }
    }
  }
  return false;
};

//Flattened binary search
var searchMatrix = function (matrix, target) {
  let rows = matrix.length;
  let cols = matrix[0].length;

  let l = 0;
  let r = rows * cols - 1;

  while (l <= r) {
    let m = l + Math.floor((r - l) / 2);
    let midVal = matrix[Math.floor(m / cols)][m % cols];

    if (midVal == target) return true;
    else if (midVal > target) r = m - 1;
    else l = m + 1;
  }
  return false;
};
