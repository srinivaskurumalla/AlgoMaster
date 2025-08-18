/**102
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
  if (!root) return [];
  let q = [root];
  let res = [];

  while (q.length) {
    let levelArray = [];
    let levelSize = q.length;

    for (let i = 0; i < levelSize; i++) {
      let curr = q.shift();

      curr.left && q.push(curr.left);
      curr.right && q.push(curr.right);

      levelArray.push(curr.val);
    }
    res.push(levelArray);
  }
  return res;
};

var levelOrder = function (root) {
  if (!root) return [];
  let res = [];
  
  let traverse = (curr, level) => {
    if (!res[level]) res[level] = [];

    res[level].push(curr.val);

    curr.left && traverse(curr.left, level + 1);
    curr.right && traverse(curr.right, level + 1);
  };
  traverse(root, 0);
  return res;
};
console.log(levelOrder([3, 9, 20, null, null, 15, 7]));
