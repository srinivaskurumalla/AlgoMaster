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
public class SolutionS
{
    public bool IsSameTree(TreeNode p, TreeNode q)
    {
        //traverse every node and check for values
        if (p == null && q == null) return true;
        if (p == null || q == null) return false;
        if (p.val != q.val) return false;

        if (!IsSameTree(p.left, q.left)) return false;
        if (!IsSameTree(p.right, q.right)) return false;


        return true;

    }
}