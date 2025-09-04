/** 154
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    let l = 0;
    let r = nums.length - 1;

    while (l < r) {

        let m = l + Math.floor((r - l) / 2);


        if (nums[m] > nums[r]) {
            // Minimum lies in right half
            l = m + 1;
        } else if (nums[m] < nums[r]) {
            // Minimum lies in left half (including m)
            r = m;
        }
        else r--; // nums[m] == nums[r] → can't decide → shrink search space
    }

    return nums[l]; //or nums[r]
};
