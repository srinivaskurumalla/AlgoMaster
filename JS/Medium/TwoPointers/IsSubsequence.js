/** 392
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

//brute force approach = O(n) => n = t.length
var isSubsequence = function (s, t) {
  let j = 0;
  for (let i = 0; i < t.length; i++) {
    if (t[i] == s[j]) {
      j++;
      if (j == s.length) return true;
    }
  }

  return false;
};

//Using two pointers = O(n/2) => O(n)
var isSubsequence = function (s, t) {
  if (s.length == 0) return true;
  if (t.length == 0) return false;

  let l = 0;
  let r = t.length - 1;

  let start = 0;
  let end = s.length - 1;

  while (l <= r) {
    if (t[l] == s[start] && l != r) {
      start++;
    }

    if (t[r] == s[end]) {
      end--;
    }

    if (start > end) return true;
    l++;
    r--;
  }

  return false;
};

//one directional
var isSubsequence = function (s, t) {
  let i = 0; // pointer for s
  let j = 0; // pointer for t

  while (i < s.length && j < t.length) {
    if (s[i] === t[j]) {
      i++;
    }
    j++;
  }

  return i === s.length;
};
