/**
 *  , return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const obj = {};
  // массив с точкой в начале каждого элемента
  const mas = domains.map((item) => `.${item}`);
  // ищем первую точку с конца строки в перовом элементе массива domains
  for (let i = 0; i < mas.length; i++) {
    // идем по i-ому элементу массива в поисках точки с конца
    let position = mas[i].length; // длина i-ого элемента массива
    while (position !== 0) {
      position = mas[i].lastIndexOf('.', position - 1); // позиция последней точки в строке
      // подстрока для поиска в остальной части массива
      const substr = mas[i].substring(position, mas[i].length);
      let newstr = `.${substr.split('.').reverse().join('.')}`;
      newstr = newstr.substring(0, newstr.length - 1);
      // проверяем если такого свойтсва в объекте нет, то добавляем с начальным значением 1
      if (newstr in obj === false) obj[newstr] = 1;
      else {
        // ищем это свойство в объекте и увеличиваем его значение на единицу
        obj[newstr]++;
      }
    }
  }
  return obj;
}
module.exports = getDNSStats;
