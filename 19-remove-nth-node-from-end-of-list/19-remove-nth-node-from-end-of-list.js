/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
function removeNthFromEnd(head, n) {
  const stack = [];
  if (head.next === null) return head.next;
  let node = head;
  // let start = 0;
  
  while (node) {
    stack.push(node);
    node = node.next;
  }
  
  let remove = stack.length - n;
  
  if (remove > 0) {
    stack[remove - 1].next = stack[remove].next;
  } else if (remove === 0) {
    head = head.next;
  }
  
  return head;
};