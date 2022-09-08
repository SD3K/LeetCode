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
 * @return {number[]}
 */
function inorderTraversal(root) {
  const solution = [];
  
  function dfs(node) {
    if (!node) {
      return
    }
    dfs(node.left);
    solution.push(node.val);
    dfs(node.right);
  }
  
  dfs(root);
  return solution;
};