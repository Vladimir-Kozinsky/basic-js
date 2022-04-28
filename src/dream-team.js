const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  if (Array.isArray(members)) {
    let result = ''
    for (let n = 0; n < members.length; n++) {
      if (typeof members[n] === 'string') {
        let element = members[n]
        for (let i = 0; i < element.length; i++) {
          if (element[i] != ' ') {
            result += element[i].toUpperCase()
            break
          }
        }
      }
    }
    return result.split('').sort().join('')
  } return false

}

module.exports = {
  createDreamTeam
};
