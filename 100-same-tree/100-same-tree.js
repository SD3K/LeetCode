/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
const isSameTree = function(p, q) {
  let solution = true;
  const traverseTrees = function(p, q) {
    if (!p && !q) {
      return;
    }
    if (!p || !q) {
      solution = false;
      return;
    }
    if (p.val !== q.val) {
      solution = false;
    }
    traverseTrees(p.left, q.left);
    traverseTrees(p.right, q.right);
  }
  traverseTrees(p, q);
  return solution;
};