
class RandomizedSet {
    constructor() {
        this.map = new Map()
        this.arr = [];
    }

    /** 
     * @param {number} val
     * @return {boolean}
     */
    insert(val) {
        if (this.map.has(val)){
            return false;
        }
        this.map.set(val, this.arr.length)
        this.arr.push(val);
        return true;
    }

    /** 
     * @param {number} val
     * @return {boolean}
     */
    remove(val) {
        if (!this.map.has(val)) {
            return false;
        }
        const index = this.map.get(val);
        const lastValue = this.arr.pop();
        if (val !== lastValue) {
            this.arr[index] = lastValue;
            this.map.set(lastValue, index);
        }
        this.map.delete(val);
        return true;
    }
    /**
     * @return {number}
     */    
    getRandom() {
        const randomIndex = Math.floor(Math.random() * this.arr.length);
        return this.arr[randomIndex];
    }
}

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */