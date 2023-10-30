/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const arr1 = s.split(' ')
    const arr2 = pattern.split('').map((x, i)=>{
        let index = pattern.indexOf(x);
        if (index==i) {
            for(let k=0;k<i;k++){
                return (arr1[k] === arr1[i]) ? '' : arr1[i]
            }
        }
        if (index==-1) {
            return NULL;
        } else {
            return arr1[index];
        }
    })
    console.log(arr2)
    return arr1.join() === arr2.join() ? true : false
};