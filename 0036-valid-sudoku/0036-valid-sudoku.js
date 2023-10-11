/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
       for(let x = 0; x < 9; x++) {
        let row = new Set();
        let col = new Set();
        let grd = new Set();

        for(let y = 0; y < 9; y++) {
            let rowBox = board[x][y];
            let colBox = board[y][x];


            let xGrd = (3 * Math.floor(x / 3) + Math.floor(y / 3));
            let yGrd = (3 * (x % 3) + (y % 3));
            let grdBox = board[xGrd][yGrd];


            if(rowBox !== ".") {

                if(row.has(rowBox)) return false;

                row.add(rowBox); 
            }
 
            if(colBox !== ".") {
                if(col.has(colBox)) return false
                col.add(colBox);
            }

            if(grdBox !== ".") {
                if(grd.has(grdBox)) return false
                grd.add(grdBox);
            }
        }
    }

    return true;
};