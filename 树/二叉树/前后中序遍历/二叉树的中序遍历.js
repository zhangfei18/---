function inorder(root) {
    if (!root) {
        return;
    }
    inorder(root.left);
    // 自己的逻辑操作
    console.log('根节点：', root.val);
    inorder(root.right);
}