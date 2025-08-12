/** 42
 * @param {number[]} height
 * @return {number}
 */

//T= O(n), S = O(1)
var trap = function (height) {
  let left = 0; // Start pointer
  let right = height.length - 1; // End pointer
  let leftMax = 0; // Highest bar seen so far from left
  let rightMax = 0; // Highest bar seen so far from right

  let waterTrapped = 0;
  while (left < right) {
    if (height[left] < height[right]) {
      // If current left bar taller than leftMax → update
      // else → trap water using leftMax
      if (height[left] >= leftMax) {
        leftMax = height[left];
      } else {
        waterTrapped += leftMax - height[left];
      }

      left++;
    } else {
      // If current right bar taller than rightMax → update
      // else → trap water using rightMax
      if (height[right] >= rightMax) {
        rightMax = height[right];
      } else {
        waterTrapped += rightMax - height[right];
      }
      right--;
    }
  }
  return waterTrapped;
};

//If we are okay with S = O(n)
//we can do it this way = PreComputed left/right max arrays
var trap = function (height) {
  let n = height.length;
  let leftMaxArr = [];
  let rightMaxArr = [];

  // Build prefix max array from left
  leftMaxArr[0] = height[0];
  for (let i = 1; i < n; i++) {
    leftMaxArr[i] = Math.max(leftMaxArr[i - 1], height[i]);
  }

  // Build suffix max array from right
  rightMaxArr[n - 1] = height[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    rightMaxArr[i] = Math.max(rightMaxArr[i + 1], height[i]);
  }
  //** Also we can find both array using one loop */

  // Water trapped = min(leftMax, rightMax) - current height
  let waterTrapped = 0;
  for (let i = 0; i < n; i++) {
    waterTrapped += Math.min(leftMaxArr[i], rightMaxArr[i]) - height[i];
  }
  return waterTrapped;
};

height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
console.log(trap(height));
