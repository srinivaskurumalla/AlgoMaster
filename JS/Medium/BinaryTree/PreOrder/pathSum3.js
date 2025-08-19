/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function (root, targetSum) {
  let count = 0;
  let map = new Map();
  map.set(0, 1); //base case
  //Calculate Prefix Sum & store curr Sum in hash map
  let dfs = (curr, currSum) => {
    if (!curr) return;
    currSum += curr.val;

    //check if there is a valid path
    if (map.get(currSum - targetSum)) {
      count += map.get(currSum - targetSum);
    }

    //add curr sum to map
    map.set(currSum, (map.get(currSum) || 0) + 1);

    dfs(curr.left, currSum);
    dfs(curr.right, currSum);

    //backtrack
    map.set(currSum, map.get(currSum) - 1);
  };
  dfs(root, 0);

  return count;
};
