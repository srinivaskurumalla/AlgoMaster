/** 150
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  let operation = (op, a, b) => {
    switch (op) {
      case "+":
        return a + b;

      case "-":
        return a - b;
      case "*":
        return a * b;
      case "/":
        return Math.floor(a / b) < 0 ? 0 : Math.floor(a / b);
    }
  };

  let ans = 0;
  if (tokens.length == 1) {
    return +tokens[0];
  }
  for (let i = 2; i < tokens.length; i++) {
    if (isNaN(tokens[i])) {
      let res = operation(tokens[i], +tokens[i - 2], +tokens[i - 1]);
      tokens.splice(i - 2, 3, res.toString());
      ans = res;

      i -= 2;
    }
  }
  return ans;
};

tokens = ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"];
console.log(evalRPN(tokens));
