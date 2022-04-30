const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let arr = str.split('')
  let arr2 = []
  let count = 1
  let res = ''
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      count += 1
    } else {
      if (count > 1) {
        arr2.push(count)
        arr2.push(arr[i])
        count = 1
      } else { arr2.push(arr[i]) }

    }
  }
  for (let i = 0; i < arr2.length; i++) {
    res += arr2[i]
  }
  return res
}

module.exports = {
  encodeLine
};
