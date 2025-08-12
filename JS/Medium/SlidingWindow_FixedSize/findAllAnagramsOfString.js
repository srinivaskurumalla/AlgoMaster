/** 438
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  let result = [];
  let pLen = p.length;
  let sLen = s.length;

  if (sLen < pLen) {
    //no Anagrams possible
    return result;
  }

  let pCount = new Array(26).fill(0);
  let sCount = new Array(26).fill(0);

  //helper function to find char code a->0, b->1
  const charCode = (ch) => ch.charCodeAt(0) - "a".charCodeAt(0);

  //Fill initial counts for p and first window of s
  for (let i = 0; i < pLen; i++) {
    pCount[charCode(p[i])]++;
    sCount[charCode(s[i])]++;
  }

  //Helper funtion to check equality
  const isEqual = (a, b) => a.every((val, idx) => val === b[idx]);

  //check for first window
  if (isEqual(pCount, sCount)) result.push(0);

  //slide window
  for (let i = pLen; i < sLen; i++) {
    //Add new char
    sCount[charCode(s[i])]++;

    //remove old char
    sCount[charCode(s[i - pLen])]--;
    if (isEqual(pCount, sCount)) {
      result.push(i - pLen + 1);
    }
  }
  return result;
};

//let's do this more optimized
//above code is O(n * 26) => O(n)
//now will use matches count
var findAnagrams = function (s, p) {
  let result = [];
  if (p.length > s.length) return result;

  //heper
  const charCode = (ch) => ch.charCodeAt(0) - "a".charCodeAt(0);

  let sCount = new Array(26).fill(0);
  let pCount = new Array(26).fill(0);

  for (let i = 0; i < p.length; i++) {
    sCount[charCode(s[i])]++;
    pCount[charCode(p[i])]++;
  }

  let matches = 0;
  for (let i = 0; i < 26; i++) {
    if (sCount[i] === pCount[i]) matches++;
  }

  for (let i = 0; i < s.length - p.length; i++) {
    if (matches == 26) result.push(i);

    let leftIdx = charCode(s[i]);
    let rightIdx = charCode(s[i + p.length]);

    sCount[rightIdx]++;
    if (sCount[rightIdx] == pCount[rightIdx]) {
      matches++;
    } else if (sCount[rightIdx] == pCount[rightIdx] + 1) {
      matches--;
    }

    sCount[leftIdx]--;
    if (sCount[leftIdx] == pCount[leftIdx]) {
      matches++;
    } else if (sCount[leftIdx] == pCount[leftIdx] - 1) {
      matches--;
    }
  }
  
  // Check last window
  if (matches === 26) result.push(s.length - p.length);
  return result;
};
(s = "cbaebabacd"), (p = "abc");
console.log(findAnagrams(s, p));
