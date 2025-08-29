/** 133
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function (node) {
  if (!node) return null;
  //key is old  node, val is new node
  let map = new Map();

  let DFS = (curr) => {
    // If already cloned, return the cloned node
    if (map.has(curr)) return map.get(curr);

    // Clone the current node
    let copy = new Node(curr.val);
    map.set(curr, copy);

    // Recursively clone neighbors
    for (let neighbor of curr.neighbors) {
      copy.neighbors.push(DFS(neighbor));
    }
    return copy;
  };
  return DFS(node);
};
