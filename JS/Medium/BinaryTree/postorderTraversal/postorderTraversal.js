/**145
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  let res = [];
  let postOrder = (curr) => {
    if (!curr) return;
    postOrder(curr.left);
    postOrder(curr.right);
    res.push(curr.val);
  };
  postOrder(root);
  return res;
};
