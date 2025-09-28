/** 104
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  //Do level order traversal
  let maxLevel = 0;
  if (!root) return maxLevel;

  let traverse = (curr, level) => {
    maxLevel = Math.max(maxLevel, level);
    curr.left && traverse(curr.left, level + 1);
    curr.right && traverse(curr.right, level + 1);
  };

  traverse(root, 0);
  return maxLevel;
};

var maxDepth = function (root) {
  //Do level order traversal
  let maxLevel = 0;
  if (!root) return maxLevel;

  let traverse = (curr, level) => {
    maxLevel = Math.max(maxLevel, level);
    curr.left && traverse(curr.left, level + 1);
    curr.right && traverse(curr.right, level + 1);
  };

  traverse(root, 0);
  return maxLevel;
};
