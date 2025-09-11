/** 5
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (s.length < 2) return s;
  let start = 0;
  let maxLen = 1;
  let expandAroundCenter = (left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      let currLen = right - left + 1;
      if (currLen > maxLen) {
        maxLen = currLen;
        start = left;
      }
      left--;
      right++;
    }
  };

  for (let i = 0; i < s.length; i++) {
    expandAroundCenter(i, i); //odd palindrome - center will be same
    expandAroundCenter(i, i + 1); //even palindrome  - center will not be same
  }

  return s.substring(start, start + maxLen);
};
