public class SolutionN
{
    public int NumDecodings(string s)
    {
        var dp = new Dictionary<string, int>();

        int fn(string remS)
        {
            if (remS == "") return 1;       // valid complete path
            if (remS[0] == '0') return 0;   // invalid starting with 0

            if (dp.ContainsKey(remS)) return dp[remS];


            int n = remS.Length;
            int ans = 0;

            // one digit
            string oneDigit = remS.Substring(n - 1);
            if (oneDigit != "0")
                ans += fn(remS.Substring(0, n - 1));

            // two digits
            if (n >= 2)
            {
                string twoDigit = remS.Substring(n - 2);
                int val = int.Parse(twoDigit);
                if (val >= 10 && val <= 26)
                    ans += fn(remS.Substring(0, n - 2));
            }

            dp[remS] = ans;
            return ans;
        }

        return fn(s);
    }
}
