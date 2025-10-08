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
public class SolutionSe
{
    public TreeNode SearchBST(TreeNode root, int val)
    {
        TreeNode? ans = null;

        void InOrder(TreeNode curr)
        {
            if (curr == null) return;

            InOrder(curr.left);
            if (val == curr.val) ans = curr;
            InOrder(curr.right);

        }
        InOrder(root);
        return ans;
    }

    //Since it is a Binary Search tree, we can use it's property
    //if val is less than curr, search left subtree
    //if val is greater than curr, search right subtree
    public TreeNode SearchBST2(TreeNode root, int val)
    {
        if (root == null) return null;
        if (root.val == val) return root;

        else if (val < root.val)
        {
            return SearchBST2(root.left, val); ;
        }
        else return SearchBST2(root.right, val);
    }
}