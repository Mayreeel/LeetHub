/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let arr = [...nums];
    k = k % nums.length
    for(let i = 0;i<nums.length-k;i++){
        nums[k+i] = arr[i];
    }
    for(let i = 0;i<k;i++){
        nums[i] = arr[arr.length-k+i]
    }
};