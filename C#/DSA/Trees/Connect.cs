
// Definition for a Node.
public class Node {
    public int val;
    public Node left;
    public Node right;
    public Node next;

    public Node() {}

    public Node(int _val) {
        val = _val;
    }

    public Node(int _val, Node _left, Node _right, Node _next) {
        val = _val;
        left = _left;
        right = _right;
        next = _next;
    }
}


public class SolutionCN {
    public Node Connect(Node root)
    {
        //Let traverse level by level
        void Traverse(Node curr)
        {
            if (curr == null) return;
            //To connect children of same parent => curr.left.next = curr.right
            curr.left.next = curr.right;
            //To connect children of different parent => curr.right.next = curr.next.left
            if (curr.next != null) curr.right.next = curr.next.left;
            Traverse(curr.left);
            Traverse(curr.right);
        }
        Traverse(root);
        return root;

    }
}