/** 338
 * @param {number} n
 * @return {number[]}
 */

//basic approach using Interger Bit manipulation
var countBits = function (n) {
  let result = [];
  for (let i = 0; i <= n; i++) {
    let binary = i.toString(2);
    let onesCount = 0;

    for (let j = 0; j < binary.length; j++) {
      if (binary[j] == 1) {
        onesCount += 1;
      }
    }
    result.push(onesCount);
  }
  return result;
};

//same as above withot using built in function
var countBits2 = function (n) {
  let result = [];

  for (let i = 0; i <= n; i++) {
    let num = i;
    let onesCount = 0;
    while (num > 0) {
      onesCount += num & 1;
      num = num >> 1;
    }
    result.push(onesCount);
  }
  return result;
};
console.log(countBits2(5));
