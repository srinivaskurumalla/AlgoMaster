/** 49
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let result = [];
  let map = new Map();

  for (let s of strs) {
    let word = Array.from(s).sort().join("");
    if (map.has(word)) {
      map.get(word).push(s);
    } else {
      
      map.set(word, [s]);
    }
  }

  for (let key of map.keys()) {
    result.push(map.get(key));
  }
  return result;
};

strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strs));
