/** 496
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  let map = {};
  let res = [];
  let stack = [];
  for (let i = nums2.length - 1; i >= 0; i--) {
    if (stack.length == 0) {
      map[nums2[i]] = -1;
    } else {
      let top = stack[stack.length - 1];
      while (stack.length && top < nums2[i]) {
        stack.pop();
        top = stack[stack.length - 1];
      }
      if (top) {
        map[nums2[i]] = top;
      } else {
        map[nums2[i]] = -1;
      }
    }
    stack.push(nums2[i]);
  }
//  console.log(map);

  for (let i = 0; i < nums1.length; i++) {
    res.push(map[nums1[i]]);
  }
  //console.log(res);
  return res;
};

(nums1 = [4, 1, 2]), (nums2 = [1, 3, 4, 2]);
nextGreaterElement(nums1, nums2);
