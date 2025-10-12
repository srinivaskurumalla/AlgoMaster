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
public class Solutionk
{
    public int KthSmallest(TreeNode root, int k)
    {
        //Do In order to get node in sorted order
        int ans = 0;
        int count = 0;

        void InOrder(TreeNode root, int k)
        {
            if (root == null || ans != 0) return;
            InOrder(root.left, k);
            count += 1;
            if (k == count)
            {
                ans = root.val;
                return;
            }
            Console.WriteLine("count" + count);
            InOrder(root.right, k);
        }
        InOrder(root, k);
        return ans;
    }


}