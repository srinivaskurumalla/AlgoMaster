/** 160
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    let s1 = headA;
    let s2 = headB;

    let startA = headA;
    let startB = headB;

    while (s1 != s2) {
        if (s1 == null) {
            s1 = startB
        }
        else
            s1 = s1.next;

        if (s2 == null) {
            s2 = startA
        } else
            s2 = s2.next;

        if (s1 == startA && s2 == startB) return null;//mean no intersection
    }
    return s1;
};