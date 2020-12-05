/**
 * 二叉树的最大深度:
 * 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。
 * leecode: https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/submissions/
 */
// 自底向上
var maxDepth = function (root, dep = 1) {
    // 递归出口
    if (!root) {
        return 0;
    }
    // 递归公式
    let maxL = maxDepth(root.left, dep + 1);
    let maxR = maxDepth(root.right, dep + 1);
    // 递归返回所需要的结果
    return Math.max(maxL, maxR) + 1;
};
// 一行写法：
var maxDepth = function (root, dep = 1) {
    return root ? Math.max(maxDepth(root.left), maxDepth(root.right)) + 1 : 0;
};