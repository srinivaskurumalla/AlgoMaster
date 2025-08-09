/** 238
 * @param {number[]} nums
 * @return {number[]}
 */

//but it take o(n^2), so TLE
var productExceptSelf = function (nums) {
  let n = nums.length;
  let res = [];

  for (let i = 0; i < n; i++) {
    let ans = 1;
    for (let j = 0; j < n; j++) {
      if (i != j) {
        ans *= nums[j];
      }
    }
    res.push(Math.abs(ans));
  }
  return res;
};

//Let's try with division
var productExceptSelf2 = function (nums) {
  let ans1 = 1;
  let zeroCount = 0;
  let result = new Array(nums.length).fill(0);
  for (let num of nums) {
    if (num != 0) ans1 *= num;
    else zeroCount++;
  }

  console.log(ans1);
  console.log(zeroCount);
  
  if (zeroCount > 1) {
    return result;
  } else if (zeroCount == 1) {
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] == 0) {
        result[i] = ans1;
      }
    }
  } else {
    for (let i = 0; i < nums.length; i++) {
      result[i] = ans1 / nums[i];
    }
  }
  return result;
};

//it takes O(n), but we should not use division operation

//let's take prefix product and suffix product arrays
var productExceptSelf = function (nums) {
  let n = nums.length;
  let prefixProduct = new Array(n);
  let suffixProduct = new Array(n);
  let result = new Array(n);

  prefixProduct[0] = 1; //because there are no prefixes for first element

  for (let i = 1; i < n; i++) {
    prefixProduct[i] = prefixProduct[i - 1] * nums[i - 1];
  }

  suffixProduct[n - 1] = 1; //because there are no suffixes for last element

  for (let i = n - 2; i >= 0; i--) {
    suffixProduct[i] = suffixProduct[i + 1] * nums[i + 1];
  }

  //Now get the actual product excluding current index
  for (let i = 0; i < n; i++) {
    result[i] = prefixProduct[i] * suffixProduct[i];
  }

  return result;
};

//above code takes T = O(n), S = O(n)

//Now let's ignore 3 separate arrays for prefix, suffix and result
//let's use single array

var productExceptSelf = function (nums) {
  let n = nums.length;
  let result = new Array(n);

  //let's simulate prefix product
  result[0] = 1;
  for (let i = 1; i < n; i++) {
    result[i] = result[i - 1] * nums[i - 1];
  }

  //Now let's simulat suffix Sum and count the result
  let suffixProduct = 1;
  for (let i = n - 1; i >= 0; i--) {
    result[i] *= suffixProduct;
    suffixProduct *= nums[i];
  }
  return result;
};
nums = [1,2,3,4];
console.log(productExceptSelf2(nums));
