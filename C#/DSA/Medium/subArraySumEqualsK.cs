public class Solution
{
    public int SubarraySum(int[] nums, int k)
    {
        Dictionary<int, int> map = [];
        int count = 0;
        int sum = 0;
        map.Add(0, 1);
        foreach (var num in nums)
        {
            sum += num;
            if (map.ContainsKey(sum - k))
            {
                count += map[sum - k];
            }
            if (map.ContainsKey(sum))
            {
                map[sum]++;
            }
            else
            {
                map[sum] = 1;
            }
        }
        return count;
    }
}