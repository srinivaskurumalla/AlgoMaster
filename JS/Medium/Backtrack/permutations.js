/** 46
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    let result = [];
    let n = nums.length;
    let backtrack = (path) => {
        if (path.length == n) {
            result.push([...path]);
        }

        for (let i = 0; i < n; i++) {
            if (!path.includes(nums[i])) {
                path.push(nums[i]);
                backtrack(path);
                path.pop();
            }

        }
    };
    backtrack([], 0);
    return result;
};