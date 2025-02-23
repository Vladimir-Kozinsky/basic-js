const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  let turns = 1
  for (let i = 0; i < disksNumber; i++) {
    turns *= 2
  }
  let time = Math.floor((turns - 1) / (turnsSpeed / 60 / 60))
  return { turns: turns - 1, seconds: time }

}

module.exports = {
  calculateHanoi
};
