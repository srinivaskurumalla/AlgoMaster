/** 567
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  let map = getPermutations(s1);
  let n = s1.length;
  console.log(map);

  for (let i = 0; i < s2.length; i++) {
    if (i + n <= s2.length) {
      let window = s2.slice(i, i + n);
      console.log("winow", window);

      if (map.has(window)) {
        return true;
      }
    }
  }
  console.log(map);

  return false;
};

var getPermutations = function (str) {
  const permutations = new Map();
  let permute = (str, left, right) => {
    if (left == right) {
      permutations.set(str, 1);
    } else {
      for (let i = left; i <= right; i++) {
        str = swap(str, left, i);
        permute(str, left + 1, right);
        str = swap(str, left, i);
      }
    }
  };
  permute(str, 0, str.length - 1);
  return permutations;
};
var swap = function (str, l, r) {
  const charArr = str.split("");
  [charArr[l], charArr[r]] = [charArr[r], charArr[l]];
  return charArr.join("");
};

var checkInclusion2 = function (s1, s2) {
  let n = s1.length;
  let m = s2.length;
  let s1Arr = new Array(26).fill(0);
  let s2Arr = new Array(26).fill(0);

  for (let i = 0; i < n; i++) {
    s1Arr[s1.charCodeAt(i) - "a".charCodeAt(0)]++;
    s2Arr[s2.charCodeAt(i) - "a".charCodeAt(0)]++;
  }

  let matches = 0;

  for (let k = 0; k < 26; k++) {
    if (s1Arr[k] == s2Arr[k]) {
      matches++;
    }
  }
  for (let i = 0; i <= m - n; i++) {
    if (matches == 26) return true;

    let leftIdx = s2.charCodeAt(i) - "a".charCodeAt(0);
    let rightIdx = s2.charCodeAt(i + n) - "a".charCodeAt(0);
    //add next char
    s2Arr[rightIdx]++;
    if (s2Arr[rightIdx] == s1Arr[rightIdx]) {
      matches++;
    } else if (s2Arr[rightIdx] == s1Arr[rightIdx] + 1) {
      matches--;
    }

    //remove prev char
    s2Arr[leftIdx]--;
    if (s2Arr[leftIdx] == s1Arr[leftIdx]) {
      matches++;
    } else if (s2Arr[leftIdx] == s1Arr[leftIdx] - 1) {
      matches--;
    }
  }
  return matches == 26;
};

var checkInclusion = function (s1, s2) {
  if (s1.length > s2.length) return false;

  let pCount = new Array(26).fill(0); //s1
  let sCount = new Array(26).fill(0); //s2

  const aCharCode = "a".charCodeAt(0);
  let m = s1.length;
  let n = s2.length;

  for (let i = 0; i < m; i++) {
    pCount[s1.charCodeAt(i) - aCharCode]++;
    sCount[s2.charCodeAt(i) - aCharCode]++;
  }

  let matches = 0;
  for (let i = 0; i < 26; i++) {
    if (pCount[i] == sCount[i]) {
      matches++;
    }
  }

  //slide
  let left = 0;
  for (let right = m; right < n; right++) {
    if (matches == 26) return true;

    //add new char
    let idx = s2.charCodeAt(right) - aCharCode;
    sCount[idx]++;
    if (sCount[idx] == pCount[idx]) {
      matches++;
    } else if (sCount[idx] == pCount[idx] + 1) {
      matches--;
    }

    //remove old char
    idx = s2.charCodeAt(left) - aCharCode;
    sCount[idx]--;
    if (sCount[idx] == pCount[idx]) {
      matches++;
    } else if (sCount[idx] == pCount[idx] - 1) {
      matches--;
    }
    left++;
  }
  return matches == 26;//last window check
};
let s2 = "eidbaooo";
let s1 = "ab";
console.log(checkInclusion2(s1, s2));
