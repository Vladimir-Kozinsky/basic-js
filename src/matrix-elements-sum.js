const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let res = 0
  let summ = []
  for (let i = 0; i < matrix.length; i++) {
    for (let n = 0; n < matrix[i].length; n++) {
      const element = matrix[i][n];
      if (element === 0) {
        matrix[i].splice(n, 1, null)
        if (matrix[i + 1]) {
          matrix[i + 1].splice(n, 1, null)
        }
        if (matrix[i + 2]) {
          matrix[i + 2].splice(n, 1, null)
        }
      } else {
        summ.push(element)
      }
    }
  }
  for (let s = 0; s < summ.length; s++) {
    res += summ[s]
  }
  return res
}

module.exports = {
  getMatrixElementsSum
};
