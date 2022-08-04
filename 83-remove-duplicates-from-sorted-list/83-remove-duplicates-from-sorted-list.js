/**
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
var deleteDuplicates = function(head) {
    if (head === null) {
        return head;
    }
    while (head.next && head.val === head.next.val) {
        let next = head.next;
        head.next = head.next.next;
        delete next;
    }
    if (head.next !== null) {
        deleteDuplicates(head.next);
    }
    return head;
};