const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  function isValidDate(date) {
    if (Object.keys(date).length > 0 || !(date instanceof Date)) {
      return false
    } else { return true }
  }

  if (date == undefined) {
    return 'Unable to determine the time of year!'
  } else if (isValidDate(date) === false) {
    throw new Error('Invalid date!')
  }
  let mounth = date.getMonth() + 1
  if (mounth === 12 || mounth === 1 || mounth === 2) {
    return 'winter'
  } else if (mounth === 3 || mounth === 4 || mounth === 5) {
    return 'spring'
  } else if (mounth === 6 || mounth === 7 || mounth === 8) {
    return 'summer'
  } else if (mounth === 9 || mounth === 10 || mounth === 11) {
    return 'autumn'
  }

}

module.exports = {
  getSeason
};
