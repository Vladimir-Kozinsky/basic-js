const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let arr = n.toString().split('')
  const min = Math.min(...arr)
  let res = ''
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == min) {
      arr.splice(i, 1)
    }
  }
  for (let i = 0; i < arr.length; i++) {
    res += arr[i]
  }
  return +res
}

module.exports = {
  deleteDigit
};
