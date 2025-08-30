/** 503
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
  //let circularNums = [...nums, ...nums];
  let stack = [];

  let res = new Array(nums.length).fill(-1);
  for (let i = nums.length - 1; i >= 0; i--) {
    stack.push(nums[i]);
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    while (stack.length) {
      if (stack[stack.length - 1] > nums[i]) {
        res[i] = stack[stack.length - 1];
        break;
      } else {
        stack.pop();
      }
    }

    stack.push(nums[i]);
  }
  return res;
};

var nextGreaterElements = function (nums) {
  const stack = [];
  const n = nums.length;
  const result = new Array(n).fill(-1);

  //Traverse twice to handle circulaity
  for (let i = 2 * n - 1; i >= 0; i--) {
    const idx = i % n;

    // Maintain stack in **monotonic decreasing** order
    while (stack.length && stack[stack.length - 1] <= nums[idx]) {
      stack.pop();
    }

    // Only assign result for the **first n elements**
    if (stack.length && i < n) {
      result[idx] = stack[stack.length - 1];
    }
    stack.push(nums[idx]);
  }
  return result;
};
let arr = [1, 2, 4, 3];
console.log(nextGreaterElements(arr));
