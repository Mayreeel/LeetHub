/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    // 재귀적으로 두 노드를 비교하는 함수
    function isSameNode(node1, node2) {
        // 둘 다 null인 경우 동일한 것으로 간주
        if (!node1 && !node2) {
            return true;
        }
        // 하나만 null이면 다른 것으로 간주
        if (!node1 || !node2) {
            return false;
        }
        // 현재 노드의 값이 다르면 다른 것으로 간주
        if (node1.val !== node2.val) {
            return false;
        }
        // 왼쪽 서브트리와 오른쪽 서브트리를 재귀적으로 비교
        return isSameNode(node1.left, node2.left) && isSameNode(node1.right, node2.right);
    }
    return isSameNode(p, q);
};