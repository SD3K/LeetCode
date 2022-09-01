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
const goodNodes = (root) => {
  let count = 0;
  
  const dfs = (root, max = root.val) => {
    if (!root) {
      return;
    }
    if (root.val >= max) {
      count++;
      max = root.val;
    }
    
    dfs(root.left, max);
    dfs(root.right, max);
  }
  
  dfs(root);
  
  return count;
};