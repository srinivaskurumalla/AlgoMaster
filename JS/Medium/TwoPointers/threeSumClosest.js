/** 16
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (arr, target) {
  arr.sort((a, b) => a - b);
  let closest = Infinity;
  let howMuchClose = Infinity;

  for (let i = 0; i < arr.length - 2; i++) {
    if (i > 0 && arr[i] == arr[i - 1]) continue;
    let n1 = i;
    let n2 = n1 + 1;
    let n3 = arr.length - 1;

    while (n2 < n3) {
      let sum = arr[n1] + arr[n2] + arr[n3];
      let currHowMuchClose = Math.abs(target - sum);

        // Update closest if better
      if (currHowMuchClose < howMuchClose) {
        closest = sum;
        howMuchClose = currHowMuchClose;
      }

      // If we hit exact target, return immediately
      if (sum == target) return sum;

      if (sum < target) n2++;
      if (sum > target) n3--;
    }
  }
  return closest;
};

(nums = [0, 0, 0]), (target = 1);
console.log(threeSumClosest(nums, target));
