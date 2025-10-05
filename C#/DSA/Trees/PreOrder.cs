
//  Definition for a binary tree node.
public class TreeNode
{
    public int val;
    public TreeNode left;
    public TreeNode right;
    public TreeNode(int val = 0, TreeNode left = null, TreeNode right = null)
    {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

public class Solution
{
    public IList<int> PreorderTraversal(TreeNode root)
    {
        IList<int> res = [];

        void traverse(TreeNode curr)
        {
            if (curr == null)
            {
                return;
            }
            

            res.Add(curr.val);
            traverse(curr.left);
            traverse(curr.right);
        }
        traverse(root);
        return res;

    }
}