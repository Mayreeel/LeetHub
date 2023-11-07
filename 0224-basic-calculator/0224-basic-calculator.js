/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    let sign = 1, sum = 0;

    const stack = [];
    for (let i = 0; i<s.length; i +=1){if (s[i] >= '0' && s[i] <= '9') {
        let num = 0
        while (s[i] >= '0' && s[i] <= '9') {
            num = (num * 10) + (s[i] - '0');
            i += 1
        }
    sum += (num * sign);
    i -= 1;
    } else if (s[i]=== '+'){
        sign = 1;
    } else if (s[i]=== '-'){
        sign = -1;
    } else if (s[i]=== '('){
        // 현재까지 결과를 스택에 저장하고 현재 계산을 초기화
        stack.push(sum);
        stack.push(sign);
        sum = 0;
        sign = 1;
    } else if (s[i]=== ')'){
        sum = stack.pop() * sum;
        sum += stack.pop();
    }}
    


    return sum;
};