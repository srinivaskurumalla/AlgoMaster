/** 34
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (arr, target) {
  //let's divide this into two problems
  //find first position of target first then last position
  let res = [-1, -1];

  let l = 0;
  let r = arr.length - 1;
  while (l <= r) {
    let m = l + Math.floor((r - l) / 2);
    if (arr[m] < target) {
      l = m + 1;
    } else if (arr[m] > target) {
      r = m - 1;
    } else {
      //arr[m] == target
      res[0] = m;
      r = m - 1;
    }
  }
  l = 0;
  r = arr.length - 1;
  while (l <= r) {
    let m = l + Math.floor((r - l) / 2);
    if (arr[m] < target) {
      l = m + 1;
    } else if (arr[m] > target) {
      r = m - 1;
    } else {
      //arr[m] == target
      res[1] = m;
      l = m + 1;
    }
  }

  return res;
};

(nums = [5, 7, 7, 8, 8, 10]), (target = 6);

console.log(searchRange(nums, target));
