const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  
  arr: [],
  getLength() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.arr.length

  },
  addLink(value) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    (value === undefined ? this.arr.push(`( )`) : this.arr.push(`( ${value} )`))
    return this

  },
  removeLink(position) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (position < 1 || position > this.arr.length || typeof position !== 'number') {
      this.arr = []
      throw new Error("You can\'t remove incorrect link!")
    } else {
      this.arr.splice(position - 1, 1)
      return this
    }
  },
  reverseChain() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.arr.reverse()
    return this
  },
  finishChain() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    let str = ''
    for (let i = 0; i < this.arr.length; i++) {
      const element = this.arr[i];
      str += (i > 0 ? '~~' : '') + element
    }
    this.arr = []
    return str
  },


};

module.exports = {
  chainMaker
};
