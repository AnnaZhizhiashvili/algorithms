// f(n)=f(n−1)+f(n−2)
// Think about how you can reach the n-th step. You only have two possible last moves:
// You stepped from (n-1) → That means you took one step from (n-1) to (n).
// You stepped from (n-2) → That means you took two steps from (n-2) to (n).
//Since these are the only two ways to arrive at step n, the total number of ways to reach n is the sum
const climbStairs = (n) => {
    if (n == 1) return 1;
    if (n == 2) return 2;

    return climbStairs(n - 1) + climbStairs(n-2)

} 