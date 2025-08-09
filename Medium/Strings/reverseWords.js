/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let res = "";
  for (let i = 0; i < s.length; i++) {
    let word = "";
    while (s[i] != " " && i < s.length) {
      word += s[i];
      i++;
    }
    if (word.length) res = word + " " + res;
  }
  return res;
};


var reverseWords = function (s) {
  let res = [];
  let curr = "";

  let i = s.length - 1;
  while (i >= 0) {
    if (s[i] != " ") {
      curr = s[i] + curr;
    } else {
      if (curr.length > 0) {
        res.push(curr);
        curr = "";
      }
    }
    i--;
  }

  if (curr.length > 0) result.push(curr);
  return res.join(" ");
};

s = " good   example";
console.log(reverseWords(s));
