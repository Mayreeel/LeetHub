/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    const n = height.length
    let left = 0
    let right = n-1
    let ans = Number.MIN_SAFE_INTEGER

    while(left < right){
    let area=0

    if (height[left] < height[right]){
    area = height[left]*(right-left)
    left++
    } else {
    area = height[right]*(right-left)
    right--
    }
    ans = Math.max(ans,area)
  }
  return ans
};