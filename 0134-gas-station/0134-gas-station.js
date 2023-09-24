/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let current = 0;
    let startIndex = 0;
    let totalGas = 0;
    let totalCost = 0;

    for (let i = 0; i < gas.length; i++) {
        totalGas += gas[i];
        totalCost += cost[i];
        current += gas[i] - cost[i];

        if (current < 0) {
            startIndex = i + 1;
            current = 0;
        }
    }

    if (totalGas >= totalCost) {
        return startIndex;
    } else {
        return -1;
    }
};