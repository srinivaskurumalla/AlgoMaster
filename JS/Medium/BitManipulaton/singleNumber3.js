/** 260
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
  let xor = 0;
  //Step1: Xor all numbers
  for (let num of nums) {
    xor = xor ^ num;
  }

  //Step2: Find rightmost set bt
  let setBit = xor & -xor;

  //step3: Split into two groups and xor separately
  let n1 = (n2 = 0);
  for (let num of nums) {
    if ((num & setBit) == 0) {
      n1 = n1 ^ num;
    } else {
      n2 = n2 ^ num;
    }
  }
  return [n1, n2];
};
nums = [1, 2, 1, 3, 2, 5];
singleNumber(nums);
