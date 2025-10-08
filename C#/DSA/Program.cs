// See https://aka.ms/new-console-template for more information

SolutionL s = new();
string str = "bcscs";
char[] chars =  { 'a','b','c' };
string s1 = chars.Aggregate("", (acc, curr) => acc + curr);
System.Console.WriteLine(s1);



