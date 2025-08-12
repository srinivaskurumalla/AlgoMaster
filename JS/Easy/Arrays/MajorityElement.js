/** 169
 * @param {number[]} nums
 * @return {number}
 */

//using map - Time = O(n), space = O(n)
var majorityElement = function (nums) {
  let map = {}; //store frequencies of each element in array
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) {
      map[nums[i]] += 1;
    } else {
      map[nums[i]] = 1;
    }
  }
  console.log(map);

  let freq = Math.ceil(nums.length / 2);
  console.log(freq);

  for (let key of Object.keys(map)) {
    //if any frequency is greater or equal to freq return key
    if (map[key] >= freq) return Number(key);
  }
};

//using sort and count - Time = O(nlogn), space = O(1)

var majorityElement2 = function (nums) {
  //sort
  nums = nums.sort((a, b) => a - b);

  let freq = Math.floor(nums.length / 2);
  let currCount = 1;
  let majority = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      currCount += 1;
    } else {
      currCount = 1;
    }

    if (currCount > freq) {
      return nums[i];
    }
  }
  return majority;
};

var majorityElement3 = function (nums) {
  nums = nums.sort((a, b) => a - b);
  return nums[Math.floor(nums.length / 2)]; //If the array is sorted, the majority element will occupy the center position because it appears more than n/2 times.
};
// Boyer-Moore Voting Algorithm Time = O(n), space = O(1)

//  Intuition:
// A majority element outweighs all others combined.

// So, even after cancelling out all non-majority elements, the majority one will be left.

var majorityElement = function (nums) {
  let count = 0;
  let candidate = null;

  for (let num of nums) {
    if (count === 0) {
      candidate = num;
    }
    count += num === candidate ? 1 : -1;
  }

  return candidate;
};

nums = [3, 2, 2, 3, 3, 3];
console.log(majorityElement2(nums));
