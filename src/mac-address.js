const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const arr = n.split('')
  let arrWithoutDesh = arr.filter(item => item !== '-')
  for (let i = 0; i < arrWithoutDesh.length; i++) {
    if (+arrWithoutDesh[i] >= 0) {
      if (0 <= +arrWithoutDesh[i] < 10) {
      } else { return false }
    } else {
      //console.log('A'.codePointAt(0) > 64)
      if (64 < arrWithoutDesh[i].codePointAt(0) && arrWithoutDesh[i].codePointAt(0) < 71) {

        console.log(arrWithoutDesh[i])
      } else { return false }
    }
  }
  return true
}
module.exports = {
  isMAC48Address
};
