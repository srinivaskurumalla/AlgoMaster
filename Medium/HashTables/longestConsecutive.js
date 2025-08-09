/** 128
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  let maxCount = 1;
  if (nums.length == 0) return 0;

  let map = new Map();
  for (let num of nums) {
    if (!map.has(num)) {
      map.set(num, num);
    }
  }
  for (let key of map.keys()) {
    if (!map.has(key - 1)) {
      let tempKey = key;
      let currCount = 1;
      while (map.has(tempKey + 1)) {
        currCount++;
        tempKey++;
      }
      maxCount = Math.max(maxCount, currCount);
    }
  }
  return maxCount;
};

var longestConsecutive = function (nums) {
  let maxCount = 1;
  if (nums.length == 0) return 0;

  let set = new Set();
  for (let num of nums) {
    if (!set.has(num)) {
      set.add(num);
    }
  }
  for (let num of set) {
    if (!set.has(num - 1)) {
      let currNum = num;
      let currCount = 1;
      while (set.has(currNum + 1)) {
        currCount++;
        currNum++;
      }
      maxCount = Math.max(maxCount, currCount);
    }
  }
  return maxCount;
};
