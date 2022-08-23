/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
function isPalindrome(head) {
  let palStr = '';
  
  while (head) {
    palStr = palStr + head.val;
    head = head.next
  }
  
  for (let i = 0; i < palStr.length / 2; i++) {
    if (palStr[i] === palStr[palStr.length - 1 - i]) {
      continue;
    }
    return false;
  }
  return true;
};