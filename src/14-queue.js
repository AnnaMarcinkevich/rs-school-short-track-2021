const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    // изначально очередь пустая
    this.first = null;
    this.last = null;
  }

  // возвращает число элементов в очереди
  get size() {
    let count = 0;
    let node = this.first;
    while (node !== null) {
      count++;
      node = node.next;
    }
    return count;
  }

  // добавить элемент в очередь
  enqueue(element) {
    // создаем новый узел с заданным значением
    const node = new ListNode(element);
    // проверяем была ли очередь пуста перед созданием
    if (this.first === null) {
      // первый и последний элемент совпадают
      this.first = node;
      this.last = node;
    } else {
      // изначально очередь непустая, поэтому добавляем в конец
      this.last.next = node;
      // новый элемент стал последним
      this.last = node;
    }
  }

  // удалить первый элемент из очереди
  dequeue() {
    // значение удаляемого элемента
    const rez = this.first.value;
    // следующий за первым элементом после удаления становится первым
    this.first = this.first.next;
    return rez;
  }

  // вывести на экран очередь
  /* print() {
     let node = this.first;
     while (node !== null) {
       console.log(node.value);
       node = node.next;
     }
   } */
}
module.exports = Queue;
