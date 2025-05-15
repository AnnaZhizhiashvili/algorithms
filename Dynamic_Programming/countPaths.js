const countPaths = (grid, r = 0, c = 0, memo = {}) => {
    const currentPos = `${r},${c}`;

    if(currentPos in memo) return memo[currentPos]
    if (r >= grid.length || c >= grid[0].length) return 0;
    if(grid[r][c] === 'X') return 0;


    if(r === grid.length - 1 && c === grid[0].length - 1) return 1;
    memo[currentPos] =  countPaths(grid, r + 1, c, memo) + countPaths(grid, r, c + 1, memo);
    return memo[currentPos];
};