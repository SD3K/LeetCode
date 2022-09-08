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
function postorderTraversal(root, solution = []) {
  if (!root) return solution;
  postorderTraversal(root.left, solution);
  postorderTraversal(root.right, solution);
  solution.push(root.val);
  return solution;
};