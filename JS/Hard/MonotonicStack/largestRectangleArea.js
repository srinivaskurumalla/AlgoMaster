/**84
 * @param {number[]} heights
 * @return {number}
 */

//brute force approach
var largestRectangleArea = function (heights) {
  let maxArea = 0;
  let n = heights.length;

  for (let i = 0; i < n; i++) {
    let minHeight = heights[i];
    for (let j = i; i < n; j++) {
      minHeight = Math.min(minHeight, heights[j]);
      let area = minHeight * (j - i + 1);
      maxArea = Math.max(maxArea, area);
    }
  }
  return maxArea;
};

//Using Monotonic Stack
// Create a stack to keep track of indices.
// Iterate through the bars of the histogram.
// Whenever the current bar is shorter than the last bar on the stack, pop from the stack and calculate the area using the popped height as the shortest bar.
// Continue this until the current bar is no longer shorter than the bar on top of the stack.
// Ensure to append a 0-height bar at the end to flush all the heights in the stack.

var largestRectangleArea = function (heights) {
  let stack = [];
  let n = heights.length;
  let maxArea = 0;
  let top = () => {
    return stack[stack.length - 1];
  };
  for (let i = 0; i <= n; i++) {
    let currHeight = i == n ? 0 : heights[i];

    while (stack.length && currHeight < heights[top()]) {
      let height = heights[stack.pop()]; // Get the height of the bar that forms the largest rectangle
      let width = stack.length == 0 ? i : i - top() - 1;
      maxArea = Math.max(maxArea, height * width);
    }
    stack.push(i);
  }
  return maxArea;
};
