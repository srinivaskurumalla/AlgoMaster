/** 15
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let result = [];
  nums = nums.sort((a, b) => a - b);
  console.log(nums);

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] == nums[i - 1]) {
      continue;
    }
    let n1 = i;

    let n2 = i + 1;
    let n3 = nums.length - 1;
    while (n2 < n3) {
      let sum = nums[n1] + nums[n2] + nums[n3];
      if (sum == 0) {
        result.push([nums[n1], nums[n2], nums[n3]]);
        while (nums[n2] == nums[n2 + 1]) {
          n2++;
        }
        n2++;

        while (nums[n3] == nums[n3 - 1]) {
          n3--;
        }
        n3--;
      } else if (sum < 0) {
        n2++;
      } else {
        n3--;
      }
    }
  }
  return result;
};

nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums));
