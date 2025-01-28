class Queue {
  constructor() {
    this.items = {};
    this.front = 0;
    this.tail = 0;
  }

  /**
   *
   * Time Complexity: O(1)
   * Space Complexity: O(1)
   */
  enqueue(item) {
    this.items[this.tail] = item;
    this.tail++;
    return `inserted ${item} at the end of the queue`;
  }

  /**
   *
   * Time Complexity: O(1)
   * Space Complexity: O(1)
   * */
  dequeue() {
    if (this.isEmpty()) {
      return "Underflow";
    }
    const dequeuedItem = this.items[this.front];
    delete this.items[this.front];
    return `dequeued ${dequeuedItem}`;
  }

  /**
   *
   * Time Complexity: O(1)
   * Space Complexity: O(1)
   * */
  peek() {
    if (this.isEmpty()) {
      return "No elements in Queue";
    }
    return this.items[this.front];
  }

  /**
   *
   * Time Complexity: O(1)
   * Space Complexity: O(1)
   * */
  isEmpty() {
    return this.front === this.tail;
  }

  /**
   *
   * Time Complexity: O(n)
   * Space Complexity: O(n)
   * */
  print() {
    return this.items;
  }
}

const myQueue = new Queue();
console.log(myQueue.enqueue(2));
console.log(myQueue.dequeue());
console.log(myQueue.isEmpty());
console.log(myQueue.peek());
console.log(myQueue.print());
