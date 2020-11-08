/**
 * 二叉树的额前序、中序、后序遍历 （递归形式和迭代形式）都必须要掌握的熟熟的
 */

//  1.先序遍历（递归实现）：根->左->右
function preorder(root) {
    if (!root) {
        return;
    }
    console.log('根：', root.val);
    // 开始递归遍历左子树，
    preorder(root.left);
    // 当左子树遍历到叶子节点时，开始从底向上遍历右子树
    preorder(root.right);
}
// 2.先序遍历（迭代实现）
/**
 * 当一道本可以用递归实现的题突然不让用递归来实现时，
 * 我么本能的就应该反应出去往栈上想。
 */
function preorderTraversal(root) {
    let res = [];
    if (!root) {
        return res;
    }
    let stack = [];
    stack.push(root);
    while(stack.length){
        let cur = stack.pop();
        res.push(cur.val);
        if(cur.right){
            stack.push(cur.right);
        }
        if(cur.left){
            stack.push(cur.left);
        }
    }
    return res;
}


// 3.先序遍历的衍生问题：
// 剑指 Offer 34题. 二叉树中和为某一值的路径 https://leetcode-cn.com/problems/er-cha-shu-zhong-he-wei-mou-yi-zhi-de-lu-jing-lcof/
// 输入一棵二叉树和一个整数，打印出二叉树中节点值的和为输入整数的所有路径。从树的根节点开始往下一直到叶节点所经过的节点形成一条路径。
function pathSum(root, sum) {
    let res = [];//最后输出的数组
    let path = [];//记录遍历是经过的节点
    function preorder(root, tar) {
        if (!root) {
            return;
        }
        path.push(root.val);
        tar -= root.val;
        if (tar === 0 && !root.left && !root.right) {
            res.push(path.slice());
        }
        preorder(root.left, tar);
        preorder(root.right, tar);
        path.pop();//path向外抛出元素：回溯
    }
    preorder(root, sum);
}
pathSum(root, 22)
