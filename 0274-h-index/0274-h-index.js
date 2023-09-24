/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    let answer = 0;
    for (let i = 0;i<citations.length;i++){
        if (citations[i]>answer){
            let currentHIndex = Math.min(citations.filter(x=>x>=citations[i]).length, citations[i])
            answer = Math.max(answer, currentHIndex)
        }
    }
    return answer
};