const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  str = String(str)
  let res = ''
  const build = (str, options) => {
    let s = ''
    let add = ''
    s += str

    if (options.addition || options.addition === null || options.addition === false) {
      options.addition = String((options.addition))
      for (let i = 0; i < options.additionRepeatTimes || i < 1; i++) {
        if (options.additionRepeatTimes && options.additionRepeatTimes > 1 && options.additionRepeatTimes - 1 !== i) {
          (options.additionSeparator ? add += options.addition + options.additionSeparator : add += options.addition + '|')
        } else {
          add += options.addition
        }
      }
    }
    return s + add
  }
  for (let i = 0; i < options.repeatTimes || i < 1; i++) {
    if (options.repeatTimes && options.repeatTimes > 1 && options.repeatTimes - 1 !== i) {

      (options.separator ? res += build(str, options) + options.separator : res += build(str, options) + '+')


    } else { res += build(str, options) }
  }
  return res

}

module.exports = {
  repeater
};
