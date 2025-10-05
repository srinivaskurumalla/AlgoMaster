/** 124
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public int val;
 *     public TreeNode left;
 *     public TreeNode right;
 *     public TreeNode(int val=0, TreeNode left=null, TreeNode right=null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
public class SolutionM
{
    public int MaxPathSum(TreeNode root)
    {
        //Traverse top-down
        //Maintain maxSum and return Max(left, right)

        int maxSum = int.MinValue;
        int Traverse(TreeNode curr)
        {
            if (curr == null) return 0;

            int left = Traverse(curr.left);
            int right = Traverse(curr.right);

            left = left < 0 ? 0 : left;
            right = right < 0 ? 0 : right;
            maxSum = Math.Max(maxSum, curr.val + left + right);

            return curr.val + Math.Max(left, right);
        }

        Traverse(root);
        return maxSum;
    }

//same but modified handling negative paths
    public int MaxPathSum2(TreeNode root)
    {
        //Traverse top-down
        //Maintain maxSum and return Max(left, right)

        int maxSum = int.MinValue;
        int Traverse(TreeNode curr)
        {
            if (curr == null) return 0;

            int left = Math.Max(0, Traverse(curr.left)); // ignore negative paths
            int right = Math.Max(0, Traverse(curr.right));

            // Check the best path through this node

            maxSum = Math.Max(maxSum, curr.val + left + right);

            // Return the max gain path to parent
            return curr.val + Math.Max(left, right);
        }

        Traverse(root);
        return maxSum;
    }
}