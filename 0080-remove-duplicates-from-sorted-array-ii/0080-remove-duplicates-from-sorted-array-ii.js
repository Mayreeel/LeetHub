/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let arr = [];
    
    for(let i = 0;i<nums.length;i++){
        if (arr.filter(x=>x==nums[i]).length >= 2){
            nums.splice(i,1)
            i--
        } else {
            arr.push(nums[i])
        }
    }
};