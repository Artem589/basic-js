const { NotImplementedError } = require("../extensions/index.js");

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

  const isValidArray = Array.isArray(members);
  if (!isValidArray) {
    return false;
  }
  const filterOfType = members.filter((item) => typeof item === "string");
  const resultTeam = filterOfType
    .map((abr) => abr.trim()[0].toLocaleUpperCase())
    .sort()
    .join("");
  return resultTeam;
}

module.exports = {
  createDreamTeam,
};
