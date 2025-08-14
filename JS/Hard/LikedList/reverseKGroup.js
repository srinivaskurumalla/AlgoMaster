/**25
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  if (k == 1) return head;
  let arr = [head];
  let n = 1;

  let curr = head;

  while (curr.next) {
    n += 1;
    arr.push(curr.next);
    curr = curr.next;
  }

  let prevTail = null;
  let m = Math.floor(n / k);
  for (let block = 0; block < m; block++) {
    let start = block * k;
    let end = start + k - 1;

    //reverse the blok nodes in place
    for (let i = end; i > start; i--) {
      arr[i].next = arr[i - 1];
    }

    // connect tail of this block to head of next section
    if (end + 1 < n) {
      arr[start].next = arr[end + 1];
    } else {
      arr[start].next = null;
    }

    // connect previous block to this block's head
    if (prevTail) {
      prevTail.next = arr[end];
    }
    prevTail = arr[start]; // tail of current block
  }
  return arr[k - 1];
};
