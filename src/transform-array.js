const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  // throw new NotImplementedError('Not implemented');
  const isValidArray = Array.isArray(arr);
  if (!isValidArray) {
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  }

  const dublicateArray = arr.slice();

  for (let index = 0; index < dublicateArray.length; index++) {
    switch (dublicateArray[index]) {
      case "--discard-next":
        if (!(dublicateArray[index] === dublicateArray.at(-1))) {
          dublicateArray.splice(index, 2);
        } else {
          dublicateArray.splice(index, 1);
        }
        break;
      case "--discard-prev":
        if (index !== 0) {
          dublicateArray.splice(index - 1, 2);
        } else {
          dublicateArray.splice(index, 1);
        }
        break;
      case "--double-next":
        if (dublicateArray[index] === dublicateArray.at(-1)) {
          dublicateArray.splice(index, 1);
        } else {
          dublicateArray.splice(index, 1, dublicateArray[index + 1]);
        }
        break;
      case "--double-prev":
        if (index !== 0) {
          dublicateArray.splice(index, 1, dublicateArray[index - 1]);
        } else {
          dublicateArray.splice(index, 1);
        }
        break;
    }
  }
  return dublicateArray.filter(
    (i) => i !== "--double-prev" && i !== "--discard-prev"
  );

}

module.exports = {
  transform,
};
