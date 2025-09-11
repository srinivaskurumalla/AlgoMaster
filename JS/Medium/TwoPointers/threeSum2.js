/** 15
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  //f => first, s= second. t = third

  let ans = [];

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] == nums[i - 1]) continue;

    let f = i;
    let s = f + 1;
    let t = nums.length - 1;

    while (s < t) {
      let sum = nums[f] + nums[s] + nums[t];
      if (sum == 0) {
        ans.push([nums[f], nums[s], nums[t]]);

        //skip duplicates
        while (s < t && nums[s] == nums[s + 1]) {
          s++;
        }
        s++;

        while (s < t && nums[t] == nums[t - 1]) {
          t--;
        }
        t--;
      } else if (sum < 0) {
        s++;
      } else {
        t--;
      }
    }
  }

  return ans;
};

nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums));
