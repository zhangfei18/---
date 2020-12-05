/**
 * 递增顺序查找树:
 * leecode:https://leetcode-cn.com/problems/increasing-order-search-tree/
 */
var increasingBST = function (root) {
    if (!root) { return null };
    let list = [];
    function inorder(root) {
        if (root === null) {
            return;
        }
        inorder(root.left);
        list.push(root.val);
        inorder(root.right);
    }
    inorder(root);
    function buildTree(val) {
        if (val > list.length - 1) {
            return null;
        }
        let cur = new TreeNode(list[val]);
        cur.right = buildTree(val + 1);
        return cur;
    }
    return buildTree(0);
};