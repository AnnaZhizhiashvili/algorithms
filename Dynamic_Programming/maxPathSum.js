
const maxPathSum = (grid, r = 0, c = 0, memo = {}) => {
    const currentPos = r + ',' + c;
    if(currentPos in memo) return memo[currentPos]

    if(r > grid.length || c > grid[0].length) return -Infinity;

    if(r === grid.length - 1 && c === grid[0].length - 1) return grid[r][c];

    const down = maxPathSum(grid, r + 1, c, memo);
    const right = maxPathSum(grid, r, c + 1, memo);
    memo[currentPos]  = grid[r][c] + Math.max(down, right);;
    return memo[currentPos];
};
  