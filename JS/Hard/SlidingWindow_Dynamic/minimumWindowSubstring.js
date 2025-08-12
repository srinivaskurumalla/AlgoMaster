/** 76
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  if (s.length < t.length) return "";

  let tMap = new Map();
  for (let ch of t) {
    tMap.set(ch, (tMap.get(ch) || 0) + 1);
  }
  console.log(tMap);

  let res = [-1, -1];
  let maxLen = Infinity;
  let left = 0;

  let need = tMap.size;
  let have = 0;

  let window_map = new Map();
  for (let right = 0; right < s.length; right++) {
    //expand the windoe to right
    let ch = s[right];
    window_map.set(ch, (window_map.get(ch) || 0) + 1);

    if (tMap.has(ch) && tMap.get(ch) == window_map.get(ch)) {
      have++;
    }

    while (need == have) {
      //update the res
      if (maxLen > right - left + 1) {
        maxLen = right - left + 1;
        res = [left, right];
      }

      //shrink the window from left
      let leftChar = s[left];
      window_map.set(leftChar, window_map.get(leftChar) - 1);
      //window_map[ch]--;
      if (tMap.has(leftChar) && tMap.get(leftChar) > window_map.get(leftChar)) {
        have--;
      }

      left++;
    }
  }
  let [start, end] = res;
  return maxLen == Infinity ? "" : s.substring(start, end + 1);
};

s = "abc";
t = "a";
console.log(minWindow(s, t));
