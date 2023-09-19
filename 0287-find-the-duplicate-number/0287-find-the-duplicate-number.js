/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    for(let i = 1; i<nums.length; i++){
        if(nums.indexOf(nums[i])!=i) return nums[i];
    }
};