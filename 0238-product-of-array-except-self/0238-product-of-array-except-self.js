/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    // Time Out
    // let answer = [];
    // for (let i = 0;i<nums.length ;i++){
    //     let except = nums.splice(i, 1);
    //     answer.push(nums.reduce((x,y)=>x*=y))
    //     nums.splice(i, 0, except)
    // }
    // return answer;
    const n = nums.length;
    const leftProducts = new Array(n);
    const rightProducts = new Array(n);
    const result = new Array(n);

    // Calculate left products
    let leftProduct = 1;
    for (let i = 0; i < n; i++) {
        leftProducts[i] = leftProduct;
        leftProduct *= nums[i];
    }

    // Calculate right products
    let rightProduct = 1;
    for (let i = n - 1; i >= 0; i--) {
        rightProducts[i] = rightProduct;
        rightProduct *= nums[i];
    }

    // Calculate the final result
    for (let i = 0; i < n; i++) {
        result[i] = leftProducts[i] * rightProducts[i];
    }

    return result;
};