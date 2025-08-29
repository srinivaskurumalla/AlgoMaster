/** 496
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  const map = {};
  const stack = []; // Monotonic decreasing stack
  for (let i = nums2.length - 1; i >= 0; i--) {
    const num = nums2[i];

    // Pop all elements smaller or equal to current number
    while (stack.length && stack[stack.length - 1] <= num) {
      stack.pop();
    }
    // If stack is empty, no greater element exists
    map[num] = stack.length ? stack[stack.length - 1] : -1;

    // Push current number onto stack
    stack.push(nums2[i]);
  }
  //  console.log(map);

  // Build result for nums1 based on the map
  return nums1.map((num) => map[num]);
  //console.log(res);
  return res;
};

(nums1 = [4, 1, 2]), (nums2 = [1, 3, 4, 2]);
nextGreaterElement(nums1, nums2);
