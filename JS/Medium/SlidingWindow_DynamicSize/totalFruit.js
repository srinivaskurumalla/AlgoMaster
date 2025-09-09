/** 904
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
  let map = {};
  let i = 0;
  let maxFruits = 0;
  for (let j = 0; j < fruits.length; j++) {
    if (map[fruits[j]]) {
      map[fruits[j]]++;
    } else {
      if (Object.keys(map).length < 2) {
        map[fruits[j]] = 1;
      } else if (Object.keys(map).length == 2) {
        let currMax = 0;
        for (let m of Object.keys(map)) {
          currMax += map[m];
        }

        //update maxFruits
        maxFruits = Math.max(maxFruits, currMax);
        //before adding curr fruit to map, remove fruits from starting so either of the fruit count should become zero
        while (true) {
          if (map[fruits[i]] > 0) {
            map[fruits[i]]--;

            if (map[fruits[i]] == 0) {
              //remove it from map
              delete map[fruits[i]];

              i++;
              break;
            }
            i++;
          }
        }

        //add the curr fruit to map
        map[fruits[j]] = 1;
      }
    }
  }
  let currMax = 0;
  for (let m of Object.keys(map)) {
    currMax += map[m];
  }

  //update maxFruits
  maxFruits = Math.max(maxFruits, currMax);
  return maxFruits;
};

var totalFruit = function (fruits) {
  let map = {};
  let i = 0;
  let maxFruits = 0;

  for (let j = 0; j < fruits.length; j++) {
    //add curr fruit to map
    map[fruits[j]] = (map[fruits[j]] || 0) + 1;

    // shrink window if more than 2 types
    while (Object.keys(map).length > 2) {
      map[fruits[i]]--;
      if (map[fruits[i]] == 0) {
        delete map[fruits[i]];
      }
      i++;
    }

    // update max fruits for the current valid window
    maxFruits = Math.max(maxFruits, j - i + 1);
  }
  return maxFruits;
};

let fruits = [1, 2, 1];
console.log(totalFruit(fruits));
