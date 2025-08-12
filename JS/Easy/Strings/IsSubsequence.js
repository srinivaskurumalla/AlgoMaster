/** 392
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    let sStart = 0;
    let sEnd = s.length;
    let tLeft = 0;
    let tRight = t.length;

    while (sStart <= sEnd && tLeft <= tRight) {
        if (s[sStart] == t[tLeft]) {
            sStart++;
        }

        if (s[sEnd] == t[tRight]) {
            sEnd--;
        }

        tLeft++;
        tRight--;

    }

    return sStart > sEnd;
};