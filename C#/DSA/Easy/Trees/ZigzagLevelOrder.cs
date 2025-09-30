
using System.Collections;

/** 103
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
public class SolutionZ
{
    //Using recursion  = top-down
    public IList<IList<int>> ZigzagLevelOrder1(TreeNode root)
    {
        if (root == null) return [];
        IList<IList<int>> ans = [];

        void DFS(TreeNode curr, int level)
        {
            //we need inner list
            // If ans doesn't have enough levels, add new lists until it does

            if (ans.Count <= level) ans.Add([]);
            //push it based on level
            if (level % 2 == 0)
            {
                ans[level].Add(curr.val);
            }
            else
            {
                ans[level].Insert(0, curr.val);
            }

            if (curr.left != null) DFS(curr.left, level + 1);
            if (curr.right != null) DFS(curr.right, level + 1);
        }
        DFS(root, 0);
        return ans;
    }
    public IList<IList<int>> ZigzagLevelOrder(TreeNode root)
    {
        if (root == null) return [];

        IList<IList<int>> res = [];
        Queue<TreeNode> q = new();
        q.Enqueue(root);

        int level = 0;
        while (q.Count != 0)
        {
            var levelSize = q.Count;
            List<int> levelArr = [];

            for (int i = 0; i < levelSize; i++)
            {
                TreeNode node = q.Dequeue();

                levelArr.Add(node.val);

                if (node.left != null) q.Enqueue(node.left);
                if (node.right != null) q.Enqueue(node.right);
            }

            if (level % 2 == 1)   // reverse for odd levels
                levelArr.Reverse();

            res.Add(levelArr);
            level++;             // important

        }
        return res;

    }
}