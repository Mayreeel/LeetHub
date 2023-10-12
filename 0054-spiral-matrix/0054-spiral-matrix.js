/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
        const yLength = matrix.length, xLength = matrix[0].length;
    let y=0, x=0, count=0, area= xLength * yLength, bag=[];

    while(count<area)
    {
        for(let i=x; count<area && i<xLength-x; i++)
        {
            bag.push(matrix[y][i])
            count++;
        }
        y++;
        for(let i=y; count<area && i<yLength-y+1; i++)
        {
            bag.push(matrix[i][(xLength-1) - x])
            count++;
        }
        x++;

        for(let i= (xLength-1) - x; count<area && i>=x-1; i--)
        {
            bag.push(matrix[(yLength-1) - (y-1)][i])
            count++;
        }

        for(let i= (yLength-1) - y; count<area && i>=y; i--)
        {
            bag.push(matrix[i][x-1])
            count++;
        }

    }
    return bag
};