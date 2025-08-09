/** 41
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  let map = {};

  //becauseit it store keys in sorted way but in string format
  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = (map[nums[i]] || 0) + 1;
  }
  let smallest = 1;
  for (let key of Object.keys(map)) {
    if (+key < 1) continue;
    else if (+key == smallest) {
      smallest += 1;
    } else return smallest;
  }
  return smallest;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive2 = function (nums) {
  let map = new Map();

  //becauseit it store keys in sorted way but in string format
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + nums[i]);
  }
  let smallest = 1;
  for (let i = 0; i < map.size; i++) {
    if (map.has(smallest)) {
      smallest += 1;
    } else {
      return smallest;
    }
  }
  return smallest;
};

//Both takes O(n) time and space

//Use Cyclic Sort / Index Placement pattern in-place
//it is applicable if numbers are in range 1 to n
//Any we need first positive, so obivioulsy it will be in 1 to n

//it takes T = O(n) and S = O(1)
var firstMissingPositive = function (nums) {
  let n = nums.length;
  for (let i = 0; i < nums.length; i++) {
    //Place nums[i] in its correct position if it is in the range [1, n]
    while (nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] != nums[i]) {
      // Swap values to their correct positions
      [nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]];
    }
  }

  // Identify the first index not satisfying nums[i] == i+1
  for (let i = 0; i < n; i++) {
    if(nums[i] != i+1) return i+1;
  }
  return n+1;
};
let arr = [1];
firstMissingPositive2(arr);
