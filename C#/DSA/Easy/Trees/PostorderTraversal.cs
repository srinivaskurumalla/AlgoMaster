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
public class Solution4
{
    public IList<int> PostorderTraversal(TreeNode root)
    {
        IList<int> res = [];
        void Postorder(TreeNode curr)
        {
            if (curr is null) return;
            Postorder(curr.left);
            Postorder(curr.right);
            res.Add(curr.val);
        }
        Postorder(root);
        return res;
    }
}