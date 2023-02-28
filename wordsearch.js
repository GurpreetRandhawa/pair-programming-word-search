const { transpose } = require("../../transpose");

const wordFinder = (arr, word) => {
  for (let i of arr) {
    let concatWord = "";
    for (let j of i) {
      concatWord = concatWord + j;
      if (concatWord === word) {
        return true;
      }
    }
  }
  return false;
};
const wordSearch = (letters, word) => {
  if (wordFinder(letters, word) || wordFinder(transpose(letters), word)) {
    return true;
  } else {
    return false;
  }
};

module.exports = wordSearch;
