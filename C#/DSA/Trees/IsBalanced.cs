/**
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
public class SolutionIs
{
    public bool IsBalanced(TreeNode root)
    {
        //Bottom up approach, return heights.
        //return max of left and right height, before that if diff is > 1 return false;

        int Traverse(TreeNode curr)
        {
            if (curr == null) return 0;

            int left = Traverse(curr.left);
            if (left == -1) return -1;

            int right = Traverse(curr.right);
            if (right == -1) return -1;

            if (Math.Abs(left - right) > 1) return -1;
            return Math.Max(left, right) + 1;

        }

        return Traverse(root) != -1;
    }
}