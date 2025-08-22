/**124
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
var maxPathSum = function (root) {
  let maxSum = -Infinity;

  let postOrder = (curr) => {
    if (!curr) return 0;
    let leftSum = postOrder(curr.left);
    let rightSum = postOrder(curr.right);

    let currTotalSum = leftSum + rightSum + curr.val;
    maxSum = Math.max(maxSum, currTotalSum);
    return curr.val;
  };
  postOrder(root);
  return maxSum;
};
