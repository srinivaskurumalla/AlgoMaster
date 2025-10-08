
//53
public class SolutionMa
{
    public int MaxSubArray(int[] nums)
    {
        int currSum = nums[0];
        int maxSum = nums[0];

        for (int i = 1; i < nums.Length; i++)
        {
            currSum = Math.Max(currSum + nums[i], nums[i]);
            maxSum = Math.Max(currSum, maxSum);
        }
        return maxSum;
    }
}