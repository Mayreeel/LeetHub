/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
        // create a new array to store the new strings
    const newArr = [''];

    // push new strings into array considering each array element can be of length <= maxWidth
    for (let i = 0; i < words.length; i++) {
        const strLastElm = newArr[newArr.length-1];
        const strAdd = (i > 0 ? (strLastElm + ' ') : strLastElm) + words[i];
        if(strAdd.length <= maxWidth) {
            newArr[newArr.length-1] = strAdd;
        } else {
            newArr.push(words[i]);
        }
    }

    // add needed spaces to each string to match each string length = maxWidth
    for (let i = 0; i < newArr.length; i++) {
        // need spaces if string length < maxWidth
        if (newArr[i].length < maxWidth) {
            const splitStr = newArr[i].split(' ');
            // add spaces at end only if
            // 1. its a last word and OR
            // 2. there is only one word in the string
            if (i === newArr.length-1 || splitStr.length === 1) {
                // add spaces at end
                newArr[i] = newArr[i].padEnd(maxWidth);
            } else {
                // calculate number of spaces needed to add
                let spacesToAdd = maxWidth - newArr[i].length;
                let j = 0;
                // evenly add spaces after each word
                while (spacesToAdd > 0) {
                    // add one space at a time
                    splitStr[j] = splitStr[j].padEnd(splitStr[j].length + 1);
                    spacesToAdd -= 1;
                    j++;
                    if (j === splitStr.length-1) {
                        // reset if more spaces are needed
                        j = 0;
                    }
                }
                newArr[i] = splitStr.join(' ');
            }
        }
    }

    return newArr;
};