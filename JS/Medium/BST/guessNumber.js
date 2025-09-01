/**  374
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
    let l = 1;
    let r = n;

    while (l <= r) {
        let m = Math.floor((l + r) / 2);
        let picked = guess(m);
        if (picked == 0) return m;
        else if (picked == -1) r = m - 1;
        else if (picked == 1) l = m + 1;
    }
};