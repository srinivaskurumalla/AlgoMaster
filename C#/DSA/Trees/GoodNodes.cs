/** 1448
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
public class SolutionG
{
    public int GoodNodes(TreeNode root)
    {
        //Let's traverse pre orderly and maintain maxSoFar num, because we need to equal or greater num
        int count = 0;
        void Traverse(TreeNode? curr, int maxSoFar)
        {
            if (curr == null) return;

            //if curr node is good
            if (curr.val >= maxSoFar)
            {
                count++;
                maxSoFar = curr.val; //update maxSoFar
            }
            Traverse(curr.left, maxSoFar);
            Traverse(curr.right, maxSoFar);
        }
        Traverse(root, root.val);
        return count;
    }
}