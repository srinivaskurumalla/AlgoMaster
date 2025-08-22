/**236
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  let count = 0;
  let lca = null;
  let postOrder = (curr) => {
    if (!curr || lca) return 0;

    let leftCount = postOrder(curr.left);
    let rightCount = postOrder(curr.right);

    if (curr.val == p.val || curr.val == q.val) {
      ++count;
    }

    count = count + leftCount + rightCount;

    if (count == 2 && !lca) {
      lca = curr;
    }

    return count;
  };
  postOrder(root);
  return;
};

var lowestCommonAncestor = function (root, p, q) {
  if (!root || root === p || root === q) return root;

  let left = lowestCommonAncestor(root.left, p, q);
  let right = lowestCommonAncestor(root.right, p, q);

  if (left && right) return root; // p and q found in both sides → root is LCA
  return left || right; // otherwise return whichever is found
};
