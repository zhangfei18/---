function postorder(root) {
    // 递归出口
    if (!root) {
        return;
    }
    // 递归公式
    inorder(root.left);
    // 递归公式
    inorder(root.right);
    // 递归返回上面保存的结果或直接在此处返回结果
    console.log('根节点：', root.val);
}