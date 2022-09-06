/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
function pruneTree(root) {
  
  function containsOne(node) {
    if (!node) return false;
    
    let leftContainsOne = containsOne(node.left);
    let rightContainsOne = containsOne(node.right);
    
    if (!leftContainsOne) node.left = null;
    if (!rightContainsOne) node.right = null;
    
    return node.val === 1 || leftContainsOne || rightContainsOne;
  }
  
  return containsOne(root) ? root : null;
};