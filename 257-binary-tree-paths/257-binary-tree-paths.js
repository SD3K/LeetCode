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
 * @return {string[]}
 */
const binaryTreePaths = function(root) {
  const solution = [];
  const findLeaves = function(node, pathStr = '') {
    if (!node) {
      return;
    }
    if (!node.left && !node.right) {
      pathStr += node.val;
      solution.push(pathStr);
    }
    if (node.left) {
      findLeaves(node.left, pathStr + node.val + '->');
    }
    if (node.right) {
      findLeaves(node.right, pathStr + node.val + '->');
    }
  }
  findLeaves(root);
  return solution;
};