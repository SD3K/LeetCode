/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
const buildTree = (inorder, postorder) => {
  const map = {};
  
  for (let i = 0; i < inorder.length; i++) {
    map[inorder[i]] = i;
  }
  
  let dfs = (start, end) => {
    if (start > end) {
      return null;
    }
    let val = postorder.pop();
    let root = new TreeNode(val);
    root.right = dfs(map[val] + 1, end);
    root.left = dfs(start, map[val] - 1);
    return root;
  }
  
  return dfs(0, inorder.length - 1);
};