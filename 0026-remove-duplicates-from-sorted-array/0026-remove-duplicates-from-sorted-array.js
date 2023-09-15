/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let nonDuplicates = [];
    
    for (let i = 0;i<nums.length;i++){
        if(nonDuplicates.filter(x=>x === nums[i]).length === 0){
            nonDuplicates.push(nums[i]);
        } else {
            nums.splice(i,1)
            i--
        }
    }
    return nonDuplicates.length;
};