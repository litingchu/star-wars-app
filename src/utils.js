/**
 * sorts array alphabetically by name
 * @param {array} inputArray
 */
const sortedByName = (inputArray) => {
  const sortedInputArray = inputArray.sort((a, b) => {
    const x = a.name.toLowerCase();
    const y = b.name.toLowerCase();
    if (x < y) {
      return -1;
    } else if (x > y) {
      return 1;
    } else {
      return 0;
    }
  });
  return sortedInputArray;
};

export { sortedByName };
