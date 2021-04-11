/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  // метод бинарного поиска в отсортированном массиве имеет сложность O(logN)
  function binarySearch(start, end, value2, mas) {
    const middle = Math.floor((start + end) / 2);
    if (mas[middle] === value2) return middle;
    return (value2 < mas[middle]) ? binarySearch(0, middle, value2, mas)
      : binarySearch(middle + 1, end, value2, mas);
  }
  return binarySearch(0, array.length - 1, value, array);
}
module.exports = findIndex;
