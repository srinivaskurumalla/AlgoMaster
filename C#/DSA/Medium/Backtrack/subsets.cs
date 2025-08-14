public class Solution1 {
    public IList<IList<int>> Subsets(int[] nums)
    {
        IList<IList<int>> list = [];

        void backtrack(List<int> path, int start)
        {
            list.Add([.. path]);
            for (var i = start; i < nums.Length; i++)
            {
                path.Add(nums[i]);
                backtrack(path, i + 1);
                path.RemoveAt(path.Count - 1);
            }
        }

        backtrack([], 0);
        return list;
    }
}