//5 - Similar one solved (647)
public class SolutionL
{
    //Solve this by using DP
    public string LongestPalindrome(string s)
    {
        int n = s.Length;
        bool[,] dp = new bool[n, n];
        int[] longest = [0, 0]; //single element is always be the palindrome

        //Let's find and fill true for 1 and 2 length palindrome
        for (int i = 0; i < n; i++)
        {
            dp[i, i] = true; //1 length char
            if (i < n - 1 && s[i] == s[i + 1]) // 2 length char
            {
                dp[i, i + 1] = true;
                longest = [i, i + 1]; //Update longest co-ordinates
            }

        }

        //remaining lengths
        for (int len = 3; len <= n; len++)
        {
            for (int i = 0; i <= n - len; i++)
            {
                int j = i + len - 1;
                if (s[i] == s[j] && dp[i + 1, j - 1] == true)
                {
                    dp[i, j] = true;
                    longest = [i, j];
                }
            }
        }
        int ansLen = longest[1] - longest[0];
        return s.Substring(longest[0], ansLen+1);

    }
}