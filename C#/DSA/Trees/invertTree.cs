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
public class SolutionI
{
    public TreeNode InvertTree(TreeNode root)
    {
        if (root is null) return root;
        //let's do in order traversal and swap left with right
        void Traverse(TreeNode curr)
        {
            //swap
            (curr.left, curr.right) = (curr.right, curr.left);
            if (curr.left is not null) Traverse(curr.left);
            if (curr.right is not null) Traverse(curr.right);
        }

        Traverse(root);
        return root;
    }
}