/**
 * 题目描述：给你一棵二叉搜索树，请你返回一棵平衡后的二叉搜索树，新生成的树应该与原来的树有着相同的节点值。
 * Leecode：1382题 https://leetcode-cn.com/problems/balance-a-binary-search-tree/
 * 
 * 关键字： 二叉搜索树 --> 平衡二叉树
 * 解题：   二叉搜索树 -> 中序遍历是一个有序的数组
 *          将这个有序的数组从中间’拎起‘，执行创建二叉树的操作，直至走完数组的每一个元素。
 */
// 代码实现：
// function TreeNode(val){
//     this.val = val;
//     this.left = this.right = null;
// }
const balanceBST = function (root) {
    let nums = [];//创建一个数组用于存放给出二叉搜索树的中序遍历。
    // 中序遍历
    function inorder(root) {
        if (!root) {
            return;
        }
        inorder(root.left);
        nums.push(root.val);
        inorder(root.right);
    }
    // 构建平衡二叉树
    function buildAVL(low, high) {
        if (low > high) {
            return null;
        }
        let mid = Math.floor(low + (high - low) / 2);
        let cur = new TreeNode(nums[mid]);
        cur.left = buildAVL(low, mid - 1);
        cur.right = buildAVL(mid + 1, high);
        return cur;
    }
    inorder(root);
    return buildAVL(0, nums.length - 1);
}
console.log(balanceBST([1,null,2,null,3,null,4,null,null]));
