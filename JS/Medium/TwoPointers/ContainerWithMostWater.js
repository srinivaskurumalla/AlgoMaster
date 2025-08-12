/** 11
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let left = 0;
    let right = height.length - 1;

    let maxWaterCapacity = 0;
    while (left < right) {
        let currWaterCapacity = Math.min(height[left], height[right]) * (right - left);
        maxWaterCapacity = Math.max(maxWaterCapacity, currWaterCapacity);

        if (height[left] < height[right]) {
            left++;
        }
        else {
            right--;
        }
    }
    return maxWaterCapacity;

};