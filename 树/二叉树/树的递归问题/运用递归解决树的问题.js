/**
 * 深度周游（递归）：
 * 递归是解决树的相关问题最有效和最常用的方法之一。
 * 在递归时，对于每个低估层级，我们只能关注单个节点内的问题，并通过递归调用函数来解决其子节点问题。
 * ’自顶向下‘： 此种解决方案可以被认为是一种 前序遍历。
 *      什么时候用：1.你能确定一些参数，从该节点自身出发寻找答案吗？
 *                2.你可以使用这些参数和节点本身的值来决定什么应该是传递给它子节点的参数吗？
 * ’自底向上‘：此种解决方案可以被认为是一种 后序遍历
 *      什么时候用：1.对于树中的任意一个节点，如果你知道他子节点的答案，你能计算出改节点的答案吗？
 * 
 * 广度周游（队列）：
 */


/**
 * 对称二叉树:
 * 给定一个二叉树，检查它是否是镜像对称的。
 */
const root = {
    val: "1",
    left: {
        val: "2",
        left: {
            val: "3",

        },
        right: {
            val: "4"
        }
    },
    right: {
        val: "2",
        left: {
            val: "4",
        },
        right: {
            val: '3'
        }
    }
};
const isSymmetric = function (root) {
    const check = function (p, q) {
        // 递归出口
        if (!p && !q) return true;
        if (!p || !q) {
            return false;
        }
        // 递归公式＋递归返回所需要的结果
        return (p.val === q.val) && (check(p.left, q.right)) && (check(p.right, q.left));
    }
    return check(root, root)
}
console.log(isSymmetric(root));

/**
 * 路径总和:
 * 给定一个二叉树和一个目标和，判断该树中是否存在根节点到叶子节点的路径，这条路径上所有节点值相加等于目标和。
 */
var hasPathSum = function (root, sum) {
    // 递归出口
    if (!root) return false;
    // 自己的逻辑-满足题目的情况
    if (root.left == null && root.right == null) {
        return root.val == sum;
    }
    // 递归公式   // 递归返回所需要的结果
    return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val)
};
/**
 * 从中序与后序遍历序列构造二叉树:
 * 根据一棵树的中序遍历与后序遍历构造二叉树。
 */
var buildTree = function (inorder, postorder) {
    const inorderMap = new Map();
    inorder.forEach((key, index) => {
        inorderMap.set(key, index);
    })
    const postorderLastIndex = postorder.length - 1;
    const helper = function (left, right) {
        // 递归出口
        if (left > right) {
            return null;
        }
        // 自己的逻辑
        const postorderLastVal = postorder[postorderLastIndex];
        const mid = inorderMap.get(postorderLastVal);
        const root = new TreeNode(postorderLastVal);
        postorderLastIndex--;
        // 递归公式
        root.right = helper(mid + 1, right);
        root.left = helper(left, mid - 1);
        // 递归返回所需要的结果
        return root;
    };
    return helper(0, inorder.length - 1);
};

/**
 * 从前序与中序遍历序列构造二叉树:
 * 根据一棵树的前序遍历与中序遍历构造二叉树。
 */
var buildTree = function (preorder, inorder) {
    let preorderPreIndex = 0;
    const inorderMap = new Map();
    inorder.forEach((key, index) => {
        inorderMap.set(key, index);
    });
    const helper = function (left, right) {
        // 递归处漏出口
        if (left > right) { return null };
        // 自己的逻辑
        const preorderPreVal = preorder[preorderPreIndex];
        const mid = inorderMap.get(preorderPreVal);
        const root = new TreeNode(preorderPreVal);
        preorderPreIndex++;
        // 递归公式
        root.left = helper(left, mid - 1)
        root.right = helper(mid + 1, right)
        // 递归返回所需要的结果
        return root;
    }
    return helper(0, inorder.length - 1)
};
/**
 * 填充每个节点的下一个右侧节点指针:
 * 给定一个完美二叉树，其所有叶子节点都在同一层，每个父节点都有两个子节点。二叉树定义如下：
 */
var connect = function (root) {
    if (!root) { return root }
    const queue = [];
    queue.push(root);
    while (queue.length) {
        let size = queue.length;
        for (let i = 0; i < size; i++) {
            let cur = queue.shift();
            if (i < size - 1) {
                cur.next = queue[0];
            }
            if (cur.left !== null) {
                queue.push(cur.left);
            }
            if (cur.right !== null) {
                queue.push(cur.right);
            }
        }

    }
    return root;
};
/**
 * 填充每个节点的下一个右侧节点指针 II:
 * 给定一个二叉树,填充它的每个 next 指针，让这个指针指向其下一个右侧节点。如果找不到下一个右侧节点，则将 next 指针设置为 NULL。
 * 
 */
var connect = function (root) {
    if (!root) { return root }
    const queue = [];
    queue.push(root);
    while (queue.length) {
        let size = queue.length;
        for (let i = 0; i < size; i++) {
            let cur = queue.shift();
            if (i < size - 1) {
                cur.next = queue[0];
            }
            if (cur.left !== null) {
                queue.push(cur.left);
            }
            if (cur.right !== null) {
                queue.push(cur.right);
            }
        }

    }
    return root;
};

/**
 * 二叉树的最近公共祖先:
 * 给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。
 */
var lowestCommonAncestor = function (root, p, q) {
    let anr;
    function dfs(root, p, q) {
        //  递归出口
        if (root === null) {
            return false;
        }
        // 递归公式
        let lson = dfs(root.left, p, q);
        let rson = dfs(root.right, p, q);
        // 自己的逻辑
        if ((lson && rson) || (root.val === p.val || root.val === q.val) && (lson || rson)) {
            anr = root;
        }
        // 递归返回所需要的结果
        return lson || rson || (root.val === p.val) || (root.val === q.val)
    }
    dfs(root, p, q);
    return anr;
};
/**
 * 二叉树的序列化与反序列化
 */
var serialize = function (root) {
    if (root == null) {                  // 遍历到 null 节点
        return 'X';
    }
    const left = serialize(root.left);   // 左子树的序列化结果
    const right = serialize(root.right); // 右子树的序列化结果
    return root.val + ',' + left + ',' + right; // 按  根,左,右  拼接字符串
};
var deserialize = function (data) {
    const list = data.split(',');   // split成数组
    const buildTree = (list) => {   // 基于list构建当前子树
        const rootVal = list.shift(); // 弹出首项，获取它的“数据”
        if (rootVal == "X") {         // 是X，返回null节点
            return null;
        }
        const root = new TreeNode(rootVal); // 不是X，则创建节点
        root.left = buildTree(list);        // 递归构建左子树
        root.right = buildTree(list);       // 递归构建右子树
        return root;                        // 返回当前构建好的root
    };

    return buildTree(list); // 构建的入口


};