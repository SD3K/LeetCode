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
function inorderTraversal(node, traversal = []) {
  if (!node) return traversal;
  inorderTraversal(node.left, traversal);
  traversal.push(node.val);
  inorderTraversal(node.right, traversal);
  return traversal;
};