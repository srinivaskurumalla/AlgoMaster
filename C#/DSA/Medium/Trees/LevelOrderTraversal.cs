
// //Definition for a binary tree node.
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

// public class Solution2
// {
//     public IList<IList<int>> LevelOrder(TreeNode root)
//     {
//         if (root == null) return [];
//         IList<IList<int>> result = [];

//         Queue<TreeNode> q = new();
//         q.Enqueue(root);

//         while (q.Count != 0)
//         {
//             List<int> levelArray = [];
//             var levelSize = q.Count;
//             for (int i = 0; i < levelSize; i++)
//             {
//                 var curr = q.Dequeue();

//                 if (curr.left != null) q.Enqueue(curr.left);
//                 if (curr.right != null) q.Enqueue(curr.right);
//                 levelArray.Add(curr.val);
//             }
//             result.Add(levelArray);
//         }
//         return result;


//     }

//     public IList<IList<int>> LevelOrder2(TreeNode root)
//     {
//         if (root == null) return [];

//         IList<IList<int>> result = [];

//         void Dfs(TreeNode curr, int depth)
//         {
//             if (curr == null) return;
//             if (result.Count <= depth)
//             {
//                 result.Add([]);
//             }
//             result[depth].Add(curr.val);

//             Dfs(curr.left, depth + 1);
//             Dfs(curr.right, depth + 1);

//         }
//         Dfs(root, 0);
//         return result;
//     }
// };



