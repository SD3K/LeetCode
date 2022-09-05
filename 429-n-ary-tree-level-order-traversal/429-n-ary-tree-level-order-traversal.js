/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
function levelOrder(root) {
  if (root === null) {
    return [];
  }
  const result = [];
  
  result.push([root.val]);
  
  const nextLevel = function(...nodes) {
    let innerRes = [];
    let nextLevelList = [];
    for (let node of nodes) {
      if (node.children) {
        for (let i = 0; i < node.children.length; i++) {
          innerRes.push(node.children[i].val);
          nextLevelList.push(node.children[i]);
        }
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