const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    let deth = 1
        function isArr(arr) {
            arr.map((newArr) => {
                if (Array.isArray(newArr)) {
                    deth += 1
                    isArr(newArr)
                }
            })
        }
        isArr(arr)
        return deth

  }
}

module.exports = {
  DepthCalculator
};
