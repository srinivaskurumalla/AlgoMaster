/**230
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
    let res = null;

    let inOrder = (curr) => {
        if (!curr || res) return;
        inOrder(curr.left);
        --k;
        if (k == 0) res = curr.val;
        inOrder(curr.right);

    };
    inOrder(root);
    return res;
};