/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  if (s1.length > s2.length) return false;

  let s1Chars = new Array(26).fill(0);
  let s2Chars = new Array(26).fill(0);

  for (let i = 0; i < s1.length; i++) {
    s1Chars[s1.charCodeAt(i) - 97]++;
    s2Chars[s2.charCodeAt(i) - 97]++;
  }

  if (AreEqual(s1Chars, s2Chars)) return true;
  for (let j = s1.length; j < s2.length; j++) {
    //remove left most char
    let leftChar = s2.charCodeAt(j - s1.length) - 97;
    s2Chars[leftChar]--;

    //add new right char
    let rightChar = s2.charCodeAt(j) - 97;
    s2Chars[rightChar]++;

    if (AreEqual(s1Chars, s2Chars)) return true;
  }
  return false;
};

function AreEqual(arr1, arr2) {
  return arr1.every((val, index) => val === arr2[index]);
}
