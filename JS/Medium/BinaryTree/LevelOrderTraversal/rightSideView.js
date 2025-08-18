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
      if (i == levelSize - 1) result.push(curr.val);

      curr.left && q.push(curr.left);
      curr.right && q.push(curr.right);
    }
  }
  return result;
};

var rightSideView = function (root) {
  let res = [];

  let traverse = (curr, depth) => {
    if (!curr) return;
    if (res.length == depth) {
      res.push(curr.val);
    }

    traverse(curr.right, depth + 1);
    traverse(curr.left, depth + 1);
  };
  traverse(root, 0);
  return res;
};
let vals = [1, 2, 3, null, 5, null, 4];
console.log(rightSideView(vals));
