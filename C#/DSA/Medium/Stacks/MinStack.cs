//155
public class MinStack
{

    private Stack<List<int>> stack;
    public MinStack()
    {
        stack = new();
    }

    public void Push(int val)
    {
        if (stack.Count == 0)
        {
            stack.Push([val, val]);
        }
        else
        {
            var minVal = stack.Peek()[1];
            stack.Push([val, Math.Min(val, minVal)]);
        }
    }

    public void Pop()
    {
        stack.Pop();
    }

    public int Top()
    {
        return stack.Peek()[0];
    }

    public int GetMin()
    {
        return stack.Peek()[1];
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * MinStack obj = new MinStack();
 * obj.Push(val);
 * obj.Pop();
 * int param_3 = obj.Top();
 * int param_4 = obj.GetMin();
 */