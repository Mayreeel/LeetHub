/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    let current = 0;
    let answer = 0;
    function DFS(root, current) {
        current += 1
        if (root === null){
            return;
        }
        answer = Math.max(answer, current)
        DFS(root.left, current)
        DFS(root.right, current)
    }
    DFS(root, current)
    return answer;
};