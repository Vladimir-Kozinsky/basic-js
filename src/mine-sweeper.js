const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const cloneMatrix = JSON.parse(JSON.stringify(matrix))

  for (let i = 0; i < matrix.length; i++) {
    for (let n = 0; n < matrix[i].length; n++) {
      const mineCount = (i, n) => {
        let count = 0;
        const arrVar = [
          { i: i - 1, n: n - 1 },
          { i: i - 1, n: n },
          { i: i - 1, n: n + 1 },
          { i: i, n: n - 1 },
          { i: i, n: n + 1 },
          { i: i + 1, n: n - 1 },
          { i: i + 1, n: n },
          { i: i + 1, n: n + 1 }
        ]
        for (let s = 0; s < arrVar.length; s++) {

          if ((arrVar[s].n < 0 || arrVar[s].i < 0 || arrVar[s].i >= matrix.length || arrVar[s].n >= matrix[i].length ? false : matrix[arrVar[s].i][arrVar[s].n])) {
            count += 1
          }

        }
        return count
      }
      cloneMatrix[i].splice(n, 1, mineCount(i, n))
    }
  }
  return cloneMatrix
}

module.exports = {
  minesweeper
};
