/** 543
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
public class SolutionD
{
    public int DiameterOfBinaryTree(TreeNode root)
    {

        int diameter = 0;
        int Traverse(TreeNode curr)
        {
            if (curr == null) return 0;
            int left = Traverse(curr.left);
            int right = Traverse(curr.right);
            diameter = Math.Max(diameter, left + right);

            return 1 + Math.Max(left, right);
        }
        Traverse(root);
        return diameter;
    }
}