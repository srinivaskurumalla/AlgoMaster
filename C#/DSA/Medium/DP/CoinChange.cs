public class SolutionC
{
    public int CoinChange(int[] coins, int amount)
{
    // Use DP - Iterative-Tabulation approach
    int[] dp = new int[amount + 1];
    dp[0] = 0; // base case

    for (int rem = 1; rem <= amount; rem++)
    {
        int min = int.MaxValue;

        for (int j = 0; j < coins.Length; j++)
        {
            int remAmount = rem - coins[j];
            if (remAmount >= 0 && dp[remAmount] != -1)
            {
                min = Math.Min(min, dp[remAmount]);
            }
        }

        dp[rem] = (min == int.MaxValue) ? -1 : 1 + min; // clean condition
    }

    return dp[amount];
}


    public int CoinChange2(int[] coins, int amount)
    {
        // Use DP - Iterative-Tabulation approach
        int[] dp = new int[amount + 1];
        Array.Fill(dp, int.MaxValue);
        dp[0] = 0;//base case;

        for (int rem = 1; rem <= amount; rem++)
        {
            foreach (int coin in coins)
            {
                int prev = rem - coin;
                if (prev >= 0 && dp[prev] != int.MaxValue)
                {
                    dp[rem] = Math.Min(dp[rem], dp[prev] + 1);
                }
            }
        }
        return dp[amount] == int.MaxValue ? -1 : dp[amount];
    }


}
