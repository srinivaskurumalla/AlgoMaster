/** 199
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
var rightSideView = function (root) {
  if (!root) return [];
  let result = [];

  let q = [root];

  while (q.length) {
    let levelSize = q.length;
    for (let i = 0; i < levelSize; i++) {
      let curr = q.shift();

      curr.left && q.push(curr.left);
      curr.right && q.push(curr.right);
      result.push(curr.val);
    }
  }
  return result;
};
let vals = [1, 2, 3, null, 5, null, 4];
console.log(rightSideView(vals));
