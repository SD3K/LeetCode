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
function preorderTraversal(root, solution = []) {
  if (!root) return solution;
  solution.push(root.val);
  preorderTraversal(root.left, solution);
  preorderTraversal(root.right, solution);
  return solution;
};