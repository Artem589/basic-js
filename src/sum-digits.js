const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(num) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
    let a = 0;
    let b = 0;
    `${num}`.split('').map(i => a += +i);
    String(a).split('').map(i => b += +i)
    if (b === 0) {
        return a;
    } else {
        return b;
    }
}

module.exports = {
  getSumOfDigits
};
