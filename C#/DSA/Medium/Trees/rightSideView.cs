
// // Definition for a binary tree node.
// public class TreeNode
// {
//     public int val;
//     public TreeNode left;
//     public TreeNode right;
//     public TreeNode(int val = 0, TreeNode left = null, TreeNode right = null)
//     {
//         this.val = val;
//         this.left = left;
//         this.right = right;
//     }
// }

// public class Solution
// {
//     public IList<int> RightSideView(TreeNode root)
//     {
//         IList<int> res = [];

//         Queue<TreeNode> q = new();
//         q.Enqueue(root);

//         while (q.Count > 0)
//         {
//             int levelSize = q.Count;
//             for (int i = 0; i < levelSize; i++)
//             {
//                 TreeNode curr = q.Dequeue();
//                 if (i == levelSize - 1) res.Add(curr.val);

//                 if (curr.left != null) q.Enqueue(curr.left);
//                 if (curr.right != null) q.Enqueue(curr.right);
//             }
//         }

//         return res;
//     }
// }