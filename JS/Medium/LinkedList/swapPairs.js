/** 24
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
    if (!head || !head.next) return head;
    let dummy = new ListNode();
    dummy.next = head;
    let prev = dummy;


    while (prev.next && prev.next.next) {
        let first = prev.next;
        let second = prev.next.next;
        
        prev.next = second;
        first.next = second.next;
        second.next = first;

        prev = first;

    }
    return dummy.next;
};