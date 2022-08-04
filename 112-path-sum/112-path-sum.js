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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
  if (!root) {
    return false;
  }
  
  let output = false;
  const loop = (tree, value) => {
    if (tree) {
      value += tree.val;
    }

    if (!tree.left && !tree.right && value === targetSum) {
      output = true;
    }

    if (tree.left) {
      loop(tree.left, value);
    }
    
    if (tree.right) {
      loop(tree.right, value);
    }
  };

  loop(root, 0);

  return output;
};