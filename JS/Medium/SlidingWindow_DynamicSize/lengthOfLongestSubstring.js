/** 3
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  //if (s.length < 2) return s.length;
  let count = 0;
  let map = new Map();
  let i = 0;
  for (let j = 0; j < s.length; j++) {
    if (map.has(s[j])) {
      i = Math.max(i, map.get(s[j]) + 1);
    }
    count = Math.max(count, j - i + 1);
    map.set(s[j], j);
  }

  return count;
};

s = "aab";

console.log(lengthOfLongestSubstring(s));
