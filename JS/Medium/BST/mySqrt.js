/**69
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x < 2) return x;
  let l = 2;
  let r = Math.floor(x / 2);

  let m = Math.floor((l + r) / 2);
  while (l < r) {
    if (m * m == x) return m;
    else if (m * m < x) {
      l = m + 1;
    } else r = m - 1;

    m = Math.floor((l + r) / 2);
  }
  return m;
};

console.log(mySqrt(8));
