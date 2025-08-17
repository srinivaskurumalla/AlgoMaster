/** 4
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  //because always perform on min array
  if (nums1.length > nums2.length) {
    return findMedianSortedArrays(nums2, nums1);
  }
  let m = nums1.length;
  let n = nums2.length;

  let totalLeft = Math.floor((m + n + 1) / 2);
  let left = 0;
  let right = m;

  while (left <= right) {
    let i = Math.floor((left + right) / 2);
    let j = totalLeft - i;

    let nums1leftMax = i == 0 ? -Infinity : nums1[i - 1];
    let nums1RightMin = i == m ? Infinity : nums1[i];

    let nums2LeftMax = j == 0 ? -Infinity : nums2[j - 1];
    let nums2RightMin = j == n ? Infinity : nums2[j];

    if (nums1leftMax <= nums2RightMin && nums2LeftMax <= nums1RightMin) {
      if ((m + n) % 2 == 0) {
        return (
          (Math.max(nums1leftMax, nums2LeftMax) +
            Math.min(nums1RightMin , nums2RightMin)) /
          2
        );
      } else {
        return Math.max(nums1leftMax, nums2LeftMax);
      }
    } else if (nums1leftMax > nums2RightMin) {
      right = i - 1;
    } else {
      left = i + 1;
    }
  }
};

