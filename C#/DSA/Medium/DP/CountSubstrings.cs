//647
public class SolutionC2
{
    //worked but I made the code complex
    public int CountSubstrings(string s)
    {
        //Let's create a 2-D array to store the found Palindromes
        bool[,] arr = new bool[s.Length, s.Length];

        //Fill single and double length chars
        for (int i = 0; i < s.Length; i++)
        {
            arr[i, i] = true;
            if (i < s.Length - 1 && s[i] == s[i + 1])//check for 2 chars
            {
                arr[i, i + 1] = true;
            }
        }

        //In order to get every substring we need 2 loops
        //directly check for 3 length substrings
        int tempLen = 2; //to check every possible
        for (int i = 0; i < s.Length; i++)
        {
            for (int j = i + tempLen; j < s.Length; j++)
            {
                if (s[i] == s[j] && arr[i + 1, j - 1] == true)
                {
                    arr[i, j] = true;
                }
                i++;
            }
            i = -1;
            tempLen++;
            if (tempLen >= s.Length) break;
        }

        //Count true in the arr
        int count = 0;
        for (int i = 0; i < s.Length; i++)
        {
            for (int j = i; j < s.Length; j++)
            {
                if (arr[i, j])
                {
                    count += 1;
                }
            }
        }
        return count;
    }

    //Cleaner code
    public int CountSubstrings2(string s)
    {
        int n = s.Length;
        bool[,] dp = new bool[n, n];
        int count = 0;

        //iterate by substring length
        for (int len = 1; len <= n; len++)
        {
            for (int i = 0; i + len - 1 < n; i++) //most crucial (i+len-1)
            {
                int j = i + len - 1; //end index

                if (s[i] == s[j])
                {
                    if (len <= 2 || dp[i + 1, j - 1]) // single char, double char, or enclosed palindrome
                    {
                        dp[i, j] = true;
                        count++;
                    }
                }
            }
        }
        return count;

    }
}