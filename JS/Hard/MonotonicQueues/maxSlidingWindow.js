/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (arr, k) {
  if (k == 1) return arr;

  let res = [];
  //User dequeue
  let dq = [];
  let i = (j = 0);

  while (j < arr.length - 1) {
    //push elemet but before that pop if curr elem is greater than dq's

    while (dq.length && arr[j] > dq[dq.length - 1]) {
      dq.pop();
    }

    dq.push(arr[j]);

    if (j >= k - 1) {
      res.push(dq[0]);

      //move window
      if (dq[0] == arr[i]) {
        dq.shift();
      }
      i++;
    }
    j++;
  }
  return res;
};

var maxSlidingWindow = function (arr, k) {
  //same but store indices in dq
  let res = [];
  let dq = [];
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    //remove element that are not in window
    if (dq.length && dq[0] < i - k + 1) {
      dq.shift();
    }

    //Remove elements that are smaller than curr element from back of the dq
    while (dq.length && nums[dq[dq.length - 1]] <= arr[i]) {
      dq.pop();
    }

    //Add curr element index to the back of the dq
    dq.push(i);

    //add the largest element from curr window to the resulr
    if (i >= k - 1) {
      res.push(arr[dq[0]]);
    }
  }
  return res;
};

let nums = [5, 4, 3, 2, 1];
let k = 3;
console.log(maxSlidingWindow(nums, k));
