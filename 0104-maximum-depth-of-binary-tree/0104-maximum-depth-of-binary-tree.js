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
 * @return {number}
 */
const maxDepth = function(root) {
  let max = 0;
  
  const dive = function(root, depth) {
    if (!root) {
      return max;
    }
    
    max = Math.max(max, depth);
    
    dive(root.left, depth + 1);
    dive(root.right, depth + 1);
  }
  
  dive(root, 1);
  return max;
};