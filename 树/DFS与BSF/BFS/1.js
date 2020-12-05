/**
 * BFS: 即层序遍历，
 * 看到层序遍历就要想到BFS+队列
 */
// 代码实现：
function BFS(root) {
    if (!root) {
        return [];
    }
    let queue = [];
    queue.push(root);
    while (queue.length) {
        let cur = queue.shift();
        console.log('层序遍历：', cur);
        if (cur.left) { queue.push(cur.left) }
        if (cur.right) { queue.push(cur.right) }
    }
}

// 实战1：返回二叉树的层序遍历的节点值
// Leecode：
function levelOrder(root) {
    const res = [];
    if (!root) {
        return;
    }
    const queue = [];
    queue.push(root);
    while (queue.length) {
        const level = [];
        let len = queue.length;
        // 每次for循环执行完一次就相当于是遍历完了一层
        for (let i = 0; i < len; i++) {
            let top = queue.shift();
            level.push(top.val);
            if (top.left) {
                queue.push(top.left)
            }
            if (top.right) {
                queue.push(top.right)
            }

        }
        res.push(level);
    }
    return res;
}
