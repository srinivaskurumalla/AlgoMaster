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
public class SolutionB
{
    public bool IsValidBST(TreeNode root)
    {
        //Traverse in Pre Order => left-root-right
        //that should give us a sorted array
        List<int> res = [];

        void InOrder(TreeNode curr)
        {
            if (curr == null) return;


            InOrder(curr.left);
            res.Add(curr.val);
            InOrder(curr.right);
        }

        InOrder(root);
        if (res.Count == 1) return true;

        for (int i = 1; i < res.Count; i++)
        {
            Console.WriteLine(res[i - 1] + " " + res[i]);
            if (res[i - 1] >= res[i]) return false;
        }
        return true;


    }

    public bool IsValidBST2(TreeNode root)
    {
        //Traverse in Pre Order => left-root-right
        //that should give us a sorted array
        bool ans = true;
        double val = double.MinValue;

        void InOrder(TreeNode curr)
        {
            if (curr == null || !ans) return;


            InOrder(curr.left);
            if (val >= curr.val) ans = false;
            else val = curr.val;
            InOrder(curr.right);
        }

        InOrder(root);
        return ans;

    }


    public bool IsValidBST3(TreeNode root)
    {
        return Validate(root, long.MinValue, long.MaxValue);
    }

    private bool Validate(TreeNode node, long min, long max)
    {
        if (node == null) return true;
        if (node.val <= min || node.val >= max) return false;

        return Validate(node.left, min, node.val) &&
               Validate(node.right, node.val, max);
    }

}