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
 * @return {number[][]}
 */
const levelOrder = function(root) {
  if (root === null) {
    return [];
  }
  const result = [];
  
  result.push([root.val]);
  
  const nextLevel = function(...nodes) {
    let innerRes = [];
    let nextLevelList = [];
    for (let node of nodes) {
      if (node.left) {
        innerRes = innerRes.concat([node.left.val]);
        nextLevelList.push(node.left);
      }
      if (node.right) {
        innerRes = innerRes.concat([node.right.val]);
        nextLevelList.push(node.right);
      }
    }
    if (innerRes.length) {
      result.push(innerRes);
    }

    if (nextLevelList.length) {
      nextLevel(...nextLevelList);
    }
    return;
  }
  
  nextLevel(root);
  return result;
};