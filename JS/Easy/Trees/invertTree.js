/** 226
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (!root) return root;
  let traverse = (curr) => {
    //swap
    [curr.left, curr.right] = [curr.right, curr.left];
    curr.left && traverse(curr.left);
    curr.right && traverse(curr.right);
  };
  traverse(root);
  return root;
};
