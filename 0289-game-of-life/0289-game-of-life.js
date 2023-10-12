/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var dirs = [[0, 1], [1, 0], [-1, 0], [0, -1], [1, 1], [1, -1], [-1, -1], [-1, 1]]
var gameOfLife = function(board) {
    for(var i = 0; i < board.length; i++) {
        for(var j = 0; j < board[0].length; j++) {
            var neighbors = 0
            for(var [x, y] of dirs) {
                var cell = board[i+x] ? board[i+x][j+y] : 0
                if(cell == 1 || cell == 3) neighbors++
            }
            if(board[i][j] == 0 || board[i][j] == 3) {
                if(neighbors == 3) board[i][j] = -1
            } else {
                if(neighbors < 2 || neighbors > 3) board[i][j] = 3
            }
        }
    }
    for(var i = 0; i < board.length; i++) {
        for(var j = 0; j < board[0].length; j++) {
            if(board[i][j] == 3) board[i][j] = 0
            if(board[i][j] == -1) board[i][j] = 1
        }
    }
}