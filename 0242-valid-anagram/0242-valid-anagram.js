/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const arr1 = s.split('').sort()
    const arr2 = t.split('').sort()
    return arr1.join()===arr2.join()? true : false
};