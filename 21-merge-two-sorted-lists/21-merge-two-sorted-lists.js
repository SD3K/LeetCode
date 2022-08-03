/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let head = new ListNode();
    
    if (!list1 || !list2) {
        return list1 || list2 ? list1 ? list1 : list2 : null;
    }
    
    if(list1.val > list2.val) {
        head = list2;
        list2 = list2.next;
    } else {
        head = list1;
        list1 = list1.next;
    }
    head.next = mergeTwoLists(list1, list2);
  
    return head;
};