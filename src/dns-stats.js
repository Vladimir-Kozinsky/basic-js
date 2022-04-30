const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let resArr = []
  const check = (word) => {
    let counter = 0
    for (let i = 0; i < domains.length; i++) {
      if (domains[i].indexOf(word) >= 0) {
        counter += 1
      }
    }
    return counter
  }

  const addToResArr = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      if (resArr.length < 1) {
        resArr.push(element)
      } else if (resArr.indexOf(element) < 0) {
        resArr.push(element)
      }
    }
  }

  for (let i = 0; i < domains.length; i++) {
    let domArr = []
    let wordsArr = domains[i].split('.').reverse()
    for (let n = 0; n < wordsArr.length; n++) {
      if (domArr.length < 1) {
        domArr.push('.' + wordsArr[n])
      } else { domArr.push(wordsArr[n] + (n === 1 ? '' : '.') + domArr[domArr.length - 1]) }
    }
    console.log(domArr)
    addToResArr(domArr)
  }
  let res = {}
  for (let i = 0; i < resArr.length; i++) {
    let element
    (resArr[i][0] == '.' ? element = resArr[i].slice(1, resArr[i].length) : element = resArr[i])
    res['.' + element.split(".").reverse().join(".")] = check(element)
  }
  return res
}

module.exports = {
  getDNSStats
};
