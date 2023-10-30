/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const arr1 = s.split('')
    const arr2 = t.split('')
    arr1.forEach((x)=>{
        if(arr2.length===0){
            arr2.splice(0, 0, ' ')
        }
        let index = arr2.indexOf(x)
        if (index!=-1) {
            arr2.splice(index, 1)
        }
    })
    if (arr2.length===0) {
        return true;
    }
    return false;
};