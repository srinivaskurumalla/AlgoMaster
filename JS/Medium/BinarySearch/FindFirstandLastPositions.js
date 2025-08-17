/** 34
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (arr, target) {
  let left = 0;
  let right = arr.length - 1;

  let res = [-1, -1];
  //let's find the first pos
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (arr[mid] == target) {
      res[0] = mid;
      right = mid - 1;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  if (res[0] == -1) return res;
  //let's find the second pos
  left = res[0];
  right = arr.length - 1;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (arr[mid] == target) {
      res[1] = mid;
      left = mid + 1;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return res;
};

let arr = [1,1,2,2,2,2,2,2,2,2,2,3,3,4,5];
console.log(searchRange(arr,2));

