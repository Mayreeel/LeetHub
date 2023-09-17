/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    if (nums.length <= 1) {
        return 0;
    }
    
    let currentMax = nums[0];
    let nextMax = nums[0];
    let jumps = 1;
    
    for (let i = 1; i < nums.length; i++) {
        if (i > currentMax) {
            jumps++;
            currentMax = nextMax;
        }
        
        nextMax = Math.max(nextMax, i + nums[i]);
    }
    
    return jumps;
};