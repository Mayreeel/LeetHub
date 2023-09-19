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
 * @return {boolean}
 */
var isBalanced = function(root) {
    let resultA = 0;
    let currentA = 0;
    let resultB = 0;
    let currentB = 0;

    if(root===null){
        return true ;
    }

    function DFSA(root, current){
        current += 1
        if(root===null){
            return ;
        }
        resultA = Math.max(resultA, current)
        DFSA(root.left, current);
        DFSA(root.right, current);
    }
    
    function DFSB(root, current){
        current += 1
        if(root===null){
            return ;
        }
        resultB = Math.max(resultB, current)
        DFSB(root.left, current);
        DFSB(root.right, current);
    }

    if(!root.left&&!root.right){
        return true;
    } else if (!root.left){
        DFSB(root.right, currentB, resultB)
        if (resultB<=1){
            return true;
        } else{
            return false;
        }
    } else if (!root.right){
        DFSA(root.left, currentA, resultA)
        if (resultA<=1){
            return true;
        } else{
            return false;
        }
    }

    DFSA(root.left, currentA);
    console.log(resultA)
    DFSB(root.right, currentB);
    console.log(resultB)

    if (Math.abs(resultA-resultB)<=1 && isBalanced(root.left) && isBalanced(root.right)){
        return true;
    }    
    return false;
};