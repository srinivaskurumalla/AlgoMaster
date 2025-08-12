// See https://aka.ms/new-console-template for more information

Solution solution = new();
int[] nums = [1, 1, 1]; //new int[1, 1, 1];
int k = 2;
int res = solution.SubarraySum(nums, k);
Console.WriteLine(res);