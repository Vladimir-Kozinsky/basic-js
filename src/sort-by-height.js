const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let newArr = arr.filter(item => item !== -1)
  let sortedArr = newArr.sort(function (a, b) { return a - b })
  console.log(sortedArr)

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element === -1) {
      sortedArr.splice(i, 0, element)
    }

  }
  return sortedArr
}

module.exports = {
  sortByHeight
};
