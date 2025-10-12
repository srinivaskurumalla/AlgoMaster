public class SolutionM
{
    public int MaxProduct(int[] arr)
    {
        int maxSoFar = arr[0];
        int minSoFar = arr[0];
        int totalMax = arr[0];

        for (int i = 1; i < arr.Length; i++)
        {
            {
                int curr = arr[i];
                int tempMax = maxSoFar; // store before overwriting

                maxSoFar = Math.Max(curr, Math.Max(maxSoFar * curr, minSoFar * curr));
                minSoFar = Math.Min(curr, Math.Min(tempMax * curr, minSoFar * curr));

                totalMax = Math.Max(totalMax, maxSoFar);
            }
        }

        return Math.Max(minSoFar, maxSoFar);
    }
}