/** 81
 * @param {number[]} arr
 * @param {number} target
 * @return {boolean}
 */
var search = function (arr, target) {
  let l = 0;
  let r = arr.length - 1;

  while (l <= r) {
    let m = l + Math.floor((r - l) / 2);
    if (arr[m] == target) return true;
    //check if right part is sorted and targets lies in b/w i.e., a[m] < target <= a[r]
    else if (arr[m] < arr[r]) {
      if (arr[m] < target && target <= arr[r]) {
        l = m + 1;
      } else r = m - 1;
    }
    //check if left part is sorted and targets lies in b/w i.e., a[l] <= target < a[m]
    else if (arr[m] > arr[r]) {
      if (arr[l] <= target && target < arr[m]) {
        r = m - 1;
      } else {
        l = m + 1;
      }
    } 
    //if m===r then shrink the search space;
    else r--;
  }
  return false;
};
