/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
        let result = [],
        pattern = {},
        wordLength = words[0].length;

    for (const word of words) {
        pattern[word] = (pattern[word] || 0) + 1;
    }

    for (let i = 0; i < wordLength; i++) {
        let back = i,
            front = back + wordLength,
            matches = {},
            count = 0

        while (front <= s.length) {
            let word = s.slice(front - wordLength, front);

            if (pattern[word]) {
                matches[word] = (matches[word] ?? 0) + 1;
                count++;

                while (matches[word] > pattern[word]) {
                    matches[s.slice(back, back + wordLength)] -= 1;
                    back += wordLength;
                    count--;
                }

                if (count === words.length) {
                    result.push(back)
                }                
            } else {
                matches = {}
                count = 0;
                back = front;
            }

            front += wordLength;
        }
    }

    return result;
};