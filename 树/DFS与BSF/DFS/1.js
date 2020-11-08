/**
 * DFS:深度优先遍历
 *  二叉树的先序遍历就是DFS的递归的实现。
 */

//  实战
function DFS(root){
    if(!root){
        return;
    }
    console.log(root.val);
    DFS(root.left);
    DFS(root.right);
}