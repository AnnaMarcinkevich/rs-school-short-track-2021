/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and l = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */
/* function convertArrayToList(arr) {
  return arr.reverse().reduce((acc, cur) => {
    if (acc) {
      const node = new ListNode(cur);
      node.next = acc;
      return node;
    }
    return new ListNode(cur);
  }, null);
}
*/
/* function printList(myList) {
  console.log();
  console.log("--new list--");
  while (myList !== null) {
    console.log(myList.value);
    myList = myList.next;
  }
} */
function removeKFromList(l, k) {
  // ссылка на начало списка
  let l2 = l;
  let list2 = l2;
  // переменная чтобы знать предыдущий элемент списка
  let previous = null;
  // просматриваем список пока не дошли до элемента null
  while (l2 !== null) {
    if (l2.value === k) {
      if (previous === null) {
        list2 = l2.next;
        l2 = l2.next;
      } else {
        // меняем ссылку у предыдущего элемента
        previous.next = l2.next;
        l2 = previous;
      }
    }
    previous = l2;
    l2 = l2.next;
  }
  return list2;
}
module.exports = removeKFromList;
