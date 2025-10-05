/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public int val;
 *     public TreeNode left;
 *     public TreeNode right;
 *     public TreeNode(int x) { val = x; }
 * }
 */
public class SolutionT
{
    public TreeNode LowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q)
    {
        //Let's do DFS bottom up and if we find p or q? that should return 1
        //else all other should return 0
        //so when ever we get 2 that means we found both p and q , then will determine LCA
        TreeNode ans = null;
        int DFS(TreeNode curr)
        {
            if (ans != null) return -1; //already found, prune recursion
            if (curr == null) return 0;

            int left = DFS(curr.left);
            int right = DFS(curr.right);

            int mid = (curr == p || curr == q) ? 1 : 0;
            if (left + right + mid == 2 && ans == null) ans = curr;

            return left + right + mid;

        }
        DFS(root);
        return ans;
    }
}