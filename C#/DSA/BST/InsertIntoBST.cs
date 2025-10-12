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
public class SolutionIn
{
    public TreeNode InsertIntoBST(TreeNode root, int val)
    {

        var curr = root;
        while (curr != null)
        {
            if (curr.val < val)
            {
                if (curr.right == null)
                {
                    curr.right = new TreeNode(val);
                    return root;
                }
                curr = curr.right;
            }
            else
            {
                if (curr.left == null)
                {
                    curr.left = new TreeNode(val);
                    return root;
                }
                curr = curr.left;
            }
        }
        return new TreeNode(val);
    }


    public TreeNode InsertIntoBST2(TreeNode root, int val)
    {
        if (root == null) return new TreeNode(val);

        if (root.val < val)
        {
            root.right = InsertIntoBST(root.right, val);
        }
        else
        {
            root.left = InsertIntoBST(root.left, val);
        }

        return root;
    }
}