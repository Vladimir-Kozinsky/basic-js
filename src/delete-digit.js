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
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let str = n.toString()
  let varArr = []
  for (let i = 0; i < str.length; i++) {
    let num = ''
    for (let p = 0; p < str.length; p++) {
      let el = str[p]
      if (i !== p) {
        num += el
      }

    }
    varArr.push(num)

  }
  varArr.sort((a, b) => +b - +a)
  return +varArr[0]
}

module.exports = {
  deleteDigit
};
