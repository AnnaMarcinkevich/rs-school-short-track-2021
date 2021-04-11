/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let rezStr = '';
  let num = 0;
  let count = 0;
  if (str.length > 0) {
    let i = 0;
    do {
      if (str[i] === str[num]) count++;
      else {
        // если перестали идти подряд одинаковые буквы, то формируем новую строку с результатом
        if (count > 1) {
          rezStr += count;
        }
        rezStr += str[num];
        // перемещаемся на следующий непросмотренный символ
        num += count;
        count = 1;
      }
    } while (i++ < str.length);
  }
  return rezStr;
}
module.exports = encodeLine;
