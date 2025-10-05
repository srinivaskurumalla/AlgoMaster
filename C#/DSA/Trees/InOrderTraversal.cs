/** 94
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
public class Trees
{
    public IList<int> InorderTraversal(TreeNode root)
    {
        List<int> ans = [];

        void Traverse(TreeNode curr)
        {
            if (curr is null) return;
            Traverse(curr.left);
            ans.Add(curr.val);
            Traverse(curr.right);
        }
        Traverse(root);
        return ans;
    }

    public IList<int> InorderTraversal2(TreeNode root)
    {
        Stack<TreeNode> stack = new();
        IList<int> ans = [];

        TreeNode curr = root;

        while (curr != null || stack.Count > 0)
        {
            //go left till end
            while (curr is not null)
            {
                stack.Push(curr);
                curr = curr.left;
            }

            curr = stack.Pop();
            ans.Add(curr.val);

            curr = curr.right;
        }
        return ans;
    }
}