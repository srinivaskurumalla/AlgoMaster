/** 112
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
public class Trees1
{
    public bool HasPathSum(TreeNode root, int targetSum)
    {
        if (root is null) return false;
        //top -down approach
        //while going down calculate the remaining target, if it reached 0 and it is a leaf node, return true
        bool ans = false;
        void Traverse(TreeNode curr, int remainingTarget)
        {
            if (ans) return;
            if (remainingTarget == 0)
            {
                if (curr.left is null && curr.right is null) ans = true;
            }
            if (curr.left is not null) Traverse(curr.left, remainingTarget - curr.val);
            if (curr.right is not null) Traverse(curr.right, remainingTarget - curr.val);
        }
        Traverse(root, targetSum - root.val);
        return ans;
    }
}