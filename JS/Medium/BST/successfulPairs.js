/** 2300
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */

//brute force approach
var successfulPairs = function (spells, potions, success) {
  let n = spells.length;
  let m = potions.length;
  let pairs = new Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    let count = 0;
    for (let j = 0; j < m; j++) {
      if (spells[i] * potions[j] >= success) {
        count++;
      }
    }
    pairs[i] = count;
  }
  return pairs;
};

//Sort + Binary Search
var successfulPairs = function (spells, potions, success) {

    //sort potions
    potions = potions.sort((a, b) => a - b);
    //apply binary search to find minimum potion that satisfy the condition

    let n = potions.length;
    let pairs = new Array(spells.length).fill(0);



    for (let i = 0; i < spells.length; i++) {
        let l = 0;
        let r = n - 1;
        let idx = n;
        
        while (l <= r) {
            m = l + Math.floor((r - l) / 2);
            if (potions[m] * spells[i] >= success) {
                idx = m;
                r = m - 1;
            } else {
                l = m + 1;
            }
        }

        pairs[i] = n - idx;

    }
    return pairs;
};