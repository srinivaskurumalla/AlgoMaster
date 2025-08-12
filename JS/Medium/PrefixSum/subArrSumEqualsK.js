/** 560
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  let n = nums.length;
  let count = 0;

  let leftSum = new Array(n);
  let rightSum = new Array(n);

  leftSum[0] = nums[0];
  rightSum[n - 1] = nums[n - 1];

  for (let i = 1; i < n; i++) {
    leftSum[i] = leftSum[i - 1] + nums[i];
  }
  console.log(leftSum);

  for (let i = n - 2; i >= 0; i--) {
    rightSum[i] = nums[i] + rightSum[i + 1];
  }

  console.log(rightSum);

  for (let i = 0; i < n; i++) {
    if (leftSum[i] % k == 0) {
      count++;
    }
  }

  for (let i = 1; i < n - 1; i++) {
    if (rightSum[i] % k == 0) {
      count++;
    }
  }

  return count;
};

//Didn't worked
//let's use hash map and store the sums
//And check whether map has sum-k
var subarraySum = function (nums, k) {
  let map = new Map();
  let count = 0;
  let sum = 0;

  map.set(0, 1); //Initial values
  for (let num of nums) {
    sum += num;
    if (map.has(sum - k)) {
      count += map.get(sum - k);
    }
    map.set(sum, (map.get(sum) || 0) + 1);
  }
  return count;
};
