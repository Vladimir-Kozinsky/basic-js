const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  encrypt(message, key) {
     throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (message === undefined || key === undefined) { throw new Error("Incorrect arguments!") }
    const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    message = message.toUpperCase()
    key = key.toUpperCase()
    let findePos = (char) => {
      for (let i = 0; i < str.length; i++) {
        const element = str[i];
        if (element === char) {
          return i
        }
      }
    }
    let resArr = []
    let keyArr = key.split('')
    for (let i = 0; i < message.length; i++) {
      if (i >= keyArr.length) {
        keyArr.push(...key.split(''))
      }
      const element = message[i];
      let m = findePos(element);
      if (m === undefined) {
        keyArr.splice(i, 0, element)
      }
      let k = findePos(keyArr[i])
      let c = str[(((str.length + (m + k)) % str.length))]
      resArr.push((c === undefined ? element : c))
    }
    keyArr.splice(message.length, keyArr.length - message.length + 1,)
    return (this.isReverse === false ? resArr.reverse().join("") : resArr.join(''))
  }
  decrypt(message, key) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (message === undefined || key === undefined) { throw new Error("Incorrect arguments!") }
    const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    message = message.toUpperCase()
    key = key.toUpperCase()
    let findePos = (char) => {
      for (let i = 0; i < str.length; i++) {
        const element = str[i];
        if (element === char) {
          return i
        }
      }
    }
    let resArr = []
    let keyArr = key.split('')
    for (let i = 0; i < message.length; i++) {
      if (i >= keyArr.length) {
        keyArr.push(...key.split(''))
      }
      const element = message[i];
      let m = findePos(element);
      if (m === undefined) {
        keyArr.splice(i, 0, element)
      }
      let k = findePos(keyArr[i])
      let c = str[(((str.length + (m + (-k))) % str.length))]
      resArr.push((c === undefined ? element : c))
    }
    keyArr.splice(message.length, keyArr.length - message.length + 1,)
    return (this.isReverse === false ? resArr.reverse().join("") : resArr.join(''))
  }
}

module.exports = {
  VigenereCipheringMachine
};
