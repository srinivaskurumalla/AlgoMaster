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
public class Tree
{
    public int MaxDepth(TreeNode root)
    {
        if (root is null) return 0;

        int maxDepth = 1;
        void Traverse(TreeNode curr, int depth)
        {
            maxDepth = Math.Max(maxDepth, depth);
            if (curr.left is not null) Traverse(curr.left, depth + 1);
            if (curr.right is not null) Traverse(curr.right, depth + 1);
        }
        Traverse(root, maxDepth);
        return maxDepth;
    }

    //Bottom-up approach
    public int MaxDepth2(TreeNode root)
    {
        if (root is null) return 0;

        int Traverse(TreeNode curr)
        {
            if (curr is null) return 0;
            int leftMax = Traverse(curr.left);
            int rightMax = Traverse(curr.right);

            return 1 + Math.Max(leftMax, rightMax);
        }
        return Traverse(root);
    }
}