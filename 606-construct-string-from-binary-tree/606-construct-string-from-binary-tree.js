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
 * @return {string}
 */
function tree2str(root) {
  let solution = '';
  
  function dfs(node) {
    if (!node) return;
    
    solution += node.val;
    
    if (node.left || node.right) {
      solution += '(';
      dfs(node.left);
      solution +=')';
      if (node.right) {
        solution += '(';
        dfs(node.right);
        solution += ')';
      }
    }
  }
  dfs(root);
  
  return solution;
};