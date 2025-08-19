
//  Definition for a binary tree node.
//   public class TreeNode {
//       public int val;
//       public TreeNode left;
//       public TreeNode right;
//       public TreeNode(int val=0, TreeNode left=null, TreeNode right=null) {
//           this.val = val;
//           this.left = left;
//           this.right = right;
//       }
//   }

public class Solution3
{
    public int PathSum(TreeNode root, int targetSum)
    {
        int count = 0;
        Dictionary<long, int> map = [];

        map[0] = 1; //base case

        void dfs(long currSum, TreeNode curr)
        {
            if (curr is null) return;
            currSum += curr.val;

            //check if there is valid path
            if (map.TryGetValue(currSum - targetSum, out int found))
            {
                count += found;
            }
            //similar to push
            if (map.TryGetValue(currSum, out int valToIncrease))
            {
                map[currSum] = valToIncrease + 1;
            }
            else
            {
                map[currSum] = 1;
            }

            dfs(currSum, curr.left);
            dfs(currSum, curr.right);


            //backtrack
            //similar to pop
            map[currSum]--;

        }

        dfs(0, root);
        return count;
    }
}