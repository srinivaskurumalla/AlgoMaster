/** 102
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  let ans = [];
  let q = [root];

  while (q.length) {
    let currQ = q.length;
    let temp = [];
    while (currQ != 0) {
      let curr = q.shift();

      temp.push(curr.val);

      q.push(curr.left);
      q.push(curr.right);

      currQ--;
    }

    ans.push(temp);
  }
  return ans;
};
