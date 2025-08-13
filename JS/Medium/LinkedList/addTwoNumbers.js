/** 2
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let dummy = new ListNode();
    let curr = dummy;
    let carry = 0;

    while (l1 || l2) {
        let val1 = l1 == null ? 0 : l1.val;
        let val2 = l2 == null ? 0 : l2.val;

        let sum = val1 + val2 + carry;
        if (sum > 9) {
            carry = Math.floor(sum / 10);
            sum = Math.floor(sum % 10);
        }
        else {
            carry = 0
        }

        let node = new ListNode(sum);
        curr.next = node;
        curr = curr.next;

        l1 = l1?.next
        l2 = l2?.next
    }

    if (carry > 0) {
        let node = new ListNode(carry);
        curr.next = node;
    }
    return dummy.next;
};