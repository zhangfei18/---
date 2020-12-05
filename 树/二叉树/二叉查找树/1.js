/**
 * 什么是二叉搜索树：
 *  1.是一棵空树
 *  2.是一棵由根结点、左子树、右子树组成的树，同时左子树和右子树都是二叉搜索树，且左子树上所有结点的数据域都小于等于根结点的数据域，右子树上所有结点的数据域都大于等于根结点的数据域
 * 左孩子 <= 根节点 <= 右孩子
 * 对二叉搜索树的编码基本功：
 *  1.查找数据域为某一特定值的结点
 *  2.插入新结点 leecode 701题:https://leetcode-cn.com/problems/insert-into-a-binary-search-tree/
 *  3.删除指定结点
 */
// 1.查找数据域为某一特定值的结点
function search(root, n) {
    if (!root) {
        return;
    }
    if (root.val === n) {
        console.log('目标结点是：', root);
    } else if (root.val > n) {
        search(root.left, n);
    } else {
        search(root.right, n);
    }
}
// 2.插入新结点
/**
 * 根据二叉搜索树的特性，对左/右子树进行遍历，
 * 直到遇到终止的条件return
 */
function insertIntoBST(root, n) {
    // 递归的终点：实例化要插入的节点
    if (!root) {
        root = new TreeNode(n);
        return root;
    }
    if (root.val > n) {
        root.left = insertIntoBST(root.left, n);
    } else if (root.val < n) {
        root.right = insertIntoBST(root.right, n);

    }
    return root;
}
// 3.删除指定结点
function deleteNode(root, n) {
    // 递归结束
    if (!root) {
        return root;
    }
    // 找到了要删除的目标节点
    if (root.val === n) {
        // 判断此节点有无左右子节点
        if (!root.left && !root.right) {
            root = null;
        } else if (root.left) {
            const maxLeft = findMax(root.left);
            root.val = maxLeft.val;
            root.left = deleteNode(root.left, maxLeft.val);
        } else {
            const minRight = findMin(root.right);
            root.val = minRight.val;
            root.right = deleteNode(root.right, minRight.val);
        }
    } else if (root.val > n) {
        root.left = deleteNode(root.left, n);
    } else {
        root.right = deleteNode(root.right, n);
    }
    return root;
}
function findMax(root) {
    while (root.right) {
        root = root.right;
    }
    return root;
}
function findMin(root) {
    while (root.left) {
        root = root.left;
    }
    return root;
}

// 实战：
// 验证二叉搜索树： Leecode 98：https://leetcode-cn.com/problems/validate-binary-search-tree/
function isValidBST(root) {
    function dfs(root, min, max) {
        if (!root) {
            return true;
        }
        if (root.val <= min || root.val >= max) { return false };
        return dfs(root.left, min, root.val) && dfs(root.right, root.val, max);
    }
    return dfs(root, -Infinity, Infinity);
}
// 根据有序数组构建二叉搜索树
const sortedArrayToBST = function (nums) {
    // 处理边界条件
    if (!nums.length) {
        return null
    }

    // root 结点是递归“提”起数组的结果
    const root = buildBST(0, nums.length - 1)

    // 定义二叉树构建函数，入参是子序列的索引范围
    function buildBST(low, high) {
        // 当 low > high 时，意味着当前范围的数字已经被递归处理完全了
        if (low > high) {
            return null
        }
        // 二分一下，取出当前子序列的中间元素
        const mid = Math.floor(low + (high - low) / 2)
        // 将中间元素的值作为当前子树的根结点值
        const cur = new TreeNode(nums[mid])
        // 递归构建左子树，范围二分为[low,mid)
        cur.left = buildBST(low, mid - 1)
        // 递归构建左子树，范围二分为为(mid,high]
        cur.right = buildBST(mid + 1, high)
        // 返回当前结点
        return cur
    }
    // 返回根结点
    return root
};