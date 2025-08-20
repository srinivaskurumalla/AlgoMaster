/**98
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
    //do inorder traversal, if result is sorted, it is valid
    let prev = -Infinity;
    let res = true;
    let traverse = (curr) => {
        if (!curr || !res) return;

        traverse(curr.left);
        if (prev < curr.val) prev = curr.val;
        else res = res & false;

        traverse(curr.right);
    }
    traverse(root);
    return res;

};