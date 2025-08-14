/** 20
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let n = s.length;

  //if len is odd, it is invalid paranthesis
  if (n % 2 == 1) return false;

  let stack = [];

  for (let i = 0; i < n; i++) {
    //push opening brackets
    if (s[i] == "(" || s[i] == "{" || s[i] == "[") {
      stack.push(s[i]);
    } else {
      //esse pop()
      if (stack.length == 0) return false;
      let lastChar = stack.pop();

      if (
        (lastChar == "(" && s[i] != ")") ||
        (lastChar == "{" && s[i] != "}") ||
        (lastChar == "[" && s[i] != "]")
      )
        return false;
    }
  }
  return true;
};
