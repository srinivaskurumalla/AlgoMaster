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
public class SolutionS2
{
    public bool IsSubtree(TreeNode root, TreeNode subRoot)
    {
        //check whether root or subroot is null

        bool ans = false;
        //let's divide this into two parts
        //1. To find the equality of root and subRoot
        void IsSameRoot(TreeNode parent, TreeNode child)
        {
            if (parent == child)
            {
                if (IsSameBody(parent, child))
                {
                    ans = true;
                }
            }

            //traverse full parent tree and check for child tree
            if (parent.left != null) IsSameRoot(parent.left, child);
            if (parent.right != null) IsSameRoot(parent.right, child);
        }
        //2. After finding roots, check for the remaining tree
        bool IsSameBody(TreeNode parent, TreeNode child)
        {
            if (parent == null && child == null) return true;
            if (parent == null || child == null) return false;
            if (parent.val != child.val) return false;
            //traverse  parent tree,  child tree and check for eqaulity
            bool left = IsSameBody(parent.left, child.left);
            bool right = IsSameBody(parent.right, child.right);
            return left && right;
        }

        IsSameRoot(root, subRoot);
        return ans;

    }


    //same approach but little different implementation
    //don't need an external variable ans
    public bool IsSubtree2(TreeNode root, TreeNode subRoot)
    {
        if (root == null) return false;

        if (IsSameTree(root, subRoot)) return true;

        // Check recursively in left and right
        return IsSubtree2(root.left, subRoot) || IsSubtree2(root.right, subRoot);
    }

    private bool IsSameTree(TreeNode p, TreeNode q)
    {
        if (p == null && q == null) return true;
        if (p == null || q == null) return false;
        if (p.val != q.val) return false;

        return IsSameTree(p.left, q.left) && IsSameTree(p.right, q.right);
    }
}