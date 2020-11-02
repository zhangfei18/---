/**
 * 二叉搜索树：
 *      1.是一棵空树
 *      2.是一棵由根结点、左子树、右子树组成的树，同时左子树和右子树都是二叉搜索树，且左子树上所有结点的数据域都小于等于根结点的数据域，右子树上所有结点的数据域都大于等于根结点的数据域
 * 平衡二叉树：任意结点的左右子树高度差绝对值都不大于1的二叉搜索树。
 * 
 * 
 * 题目描述：给定一个二叉树，判断它是否是高度平衡的二叉树。
 *  Leecode110题：https://leetcode-cn.com/problems/balanced-binary-tree/
 * 
 * 
 * 1.先复习平衡二叉树的定义：任意结点的左右子树高度差绝对值都不大于1的二叉搜索树。
 * 2.提取关键字：
 *      ①任意结点
 *      ②左右子树高度差绝对值都不大于1
 *      ③二叉搜索树
 * “任意结点”什么意思？每一个结点都需要符合某个条件，也就是说每一个结点在被遍历到的时候都需要重复某个校验流程，对不对？
 * 哎，我刚刚是不是说了什么不得了的动词了？啊，是重复！是tmd的重复啊！！！来，学到了第18节，为了向我证明你没有跳读，
 * 请大声喊出下面这两个字：递递‘递归’啊！！！
 */

// 编码：
// 自下向上递归遍历
const root = {
    val: "A",
    left: {
        val: "B",
        left: {
            val: "D",
            left:{
                val: 'Z',
                left:{
                    val: 'F'
                }
            }
        },
        right: {
            val: "E"
        }
    },
    right: {
        val: "C",
        right: {
            val: "F"
        }
    }
};
const isBalanced = function (root) {
    let flag = true;
    function dfs(root) {
        // 递归终止的条件
        if (!root || !flag) {
            return 0;
        }
        // 递归式--因为是自底向上所以直接一直到达树的最底部
        let left = dfs(root.left);
        // 递归式--因为是自底向上所以直接一直到达树的最底部
        let right = dfs(root.right);
        // 然后从底部开始比较左右两颗二叉子树的高度差
        if (Math.abs(left - right) > 1) {
            // 发现有一次左右子树不平衡时，修改flag，以后代码不会再执行到dfs函数下面的代码
            flag = false;
            return 0;
        }
        // 正常返回左右子树的高度，每向上走一层高度+1
        return Math.max(left, right) + 1;
    }
    dfs(root);
    return flag;
}
console.log(isBalanced(root));
