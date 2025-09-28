public class Solution2
{
    public int Candy(int[] ratings)
    {
        //let take an array fill with 1's , because every child should get aleast 1 candy
        int[] ltr = new int[ratings.Length]; //ltr => left to right
        Array.Fill(ltr, 1);

        int[] rtl = new int[ratings.Length]; //rtl => right to left
        Array.Fill(rtl, 1);

        //fill ltr array by checking right neighbour
        for (int i = 1; i < ratings.Length; i++)
        {
            if (ratings[i] > ratings[i - 1])
            {
                ltr[i] = ltr[i - 1] + 1;
            }
        }

        //fill rtl array by checking left neighbour
        for (int i = ratings.Length - 2; i >= 0; i--)
        {
            if (ratings[i] > ratings[i + 1])
            {
                rtl[i] = rtl[i + 1] + 1;
            }
        }

        //compare both arrays and take the max and add all of them
        int minCandies = 0;
        for (int i = 0; i < ratings.Length; i++)
        {
            minCandies += Math.Max(ltr[i], rtl[i]);
        }

        return minCandies;
    }
}