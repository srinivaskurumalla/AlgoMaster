/** 199
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
public class SolutionR
{
    public IList<int> RightSideView(TreeNode root)
    {
        IList<int> ans = [];
        if (root == null) return ans;
        //Go level by level, if you find multiple nodes in one level, store only last node
        Queue<TreeNode> Q = [];
        Q.Enqueue(root);


        while (Q.Count != 0)
        {
            int currLevelCount = Q.Count;
            TreeNode? curr = null;
            for (int i = 0; i < currLevelCount; i++)
            {
                curr = Q.Dequeue();
                if (curr.left != null) Q.Enqueue(curr.left);
                if (curr.right != null) Q.Enqueue(curr.right);
            }
            ans.Add(curr.val);
        }

        return ans;

    }



    //Using Recursion
    public IList<int> RightSideView1(TreeNode root)
    {
        List<int> ans = [];
        if (root == null) return ans;

        void Traverse(TreeNode curr, int level)
        {
            if (curr == null) return;

            // First time reaching this level
            if (ans.Count == level)
            {
                ans.Add(curr.val);
            }
            else
            {
                ans[level] = curr.val; // update with the rightmost node seen
            }

            // Important: go left first, then right
            // because we want the last (rightmost) node at each level
            Traverse(curr.left, level + 1);
            Traverse(curr.right, level + 1);
        }

        Traverse(root, 0);
        return ans;
    }


    //Iterative but,    capturing last node inside the loop
    public IList<int> RightSideView12(TreeNode root)
    {
        IList<int> ans = new List<int>();
        if (root == null) return ans;

        Queue<TreeNode> q = new Queue<TreeNode>();
        q.Enqueue(root);

        while (q.Count > 0)
        {
            int levelSize = q.Count;

            for (int i = 0; i < levelSize; i++)
            {
                TreeNode node = q.Dequeue();
                if (node.left != null) q.Enqueue(node.left);
                if (node.right != null) q.Enqueue(node.right);

                // Add last node of this level
                if (i == levelSize - 1)
                    ans.Add(node.val);
            }
        }

        return ans;
    }

    //Recursion, but traverse right first, so that no need to override
    public IList<int> RightSideView2(TreeNode root)
    {
        List<int> ans = [];
        if (root == null) return ans;

        void Traverse(TreeNode curr, int level)
        {
            if (curr == null) return;

            if (ans.Count == level)
            {
                ans.Add(curr.val); // only add once per level
            }

            Traverse(curr.right, level + 1);
            Traverse(curr.left, level + 1);
        }


        Traverse(root, 0);
        return ans;
    }
}
