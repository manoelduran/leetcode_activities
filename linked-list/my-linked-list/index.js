class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  /**
   * Time Complexity: O(1)
   * Space Complexity: O(1)
   */
  insertAtHead(data) {
    const node = new Node(data);

    node.next = this.head;

    return node;
  }

  /**
   * Time Complexity: O(n)
   * Space Complexity: O(1)
   */
  insertAtTail(data) {
    let node = this.head;
    const newNode = new Node(data);

    if (node === null) {
      this.head = newNode;
      return this.head;
    }

    while (node.next !== null) {
      node = node.next;
    }

    node.next = newNode;

    return node;
  }

  /**
   * Time Complexity: O(n)
   * Space Complexity: O(1)
   */
  insertAfterANode(key, data) {
    const newNode = new Node(data);

    let node = this.head;

    while (node) {
      if (node.data === key) break;
      node = node.next;
    }

    newNode.next = node.next;

    node.next = newNode;

    return this.head;
  }

  /**
   * Time Complexity: O(n)
   * Space Complexity: O(1)
   */
  insertBeforeANode(key, data) {
    const newNode = new Node(data);

    let node = this.head;

    if (node === null) {
      return null;
    }

    if (node.data === key) {
      newNode.next = node;
      return newNode;
    }

    let prev = null;

    while (node !== null && node.data !== key) {
      prev = node;
      node = node.next;
    }

    if (node !== null) {
      prev.next = newNode;
      newNode.next = node;
    }
    return this.head;
  }

  /**
   * Time Complexity: O(n)
   * Space Complexity: O(1)
   */
  insertAtSpecificNode(position, data) {
    const newNode = new Node(data);

    let node = this.head;

    if (position === 1) {
      newNode.next = this.head;
      this.head = newNode;
      return this.head;
    }

    if (node === null) {
      console.log("Position is out of bounds.");
      return this.head;
    }

    for (let i = 1; i < position - 1 && node !== null; i++) {
      node = node.next;
    }

    newNode.next = node.next;
    node.next = newNode;

    return this.head;
  }

  /**
   * Time Complexity: O(n)
   * Space Complexity: O(1)
   */
  size() {
    let count = 0;
    let node = this.head;

    while (node) {
      count++;
      node = node.next;
    }

    return count;
  }

  /**
   * Time Complexity: O(1)
   * Space Complexity: O(1)
   */
  clear() {
    this.head = null;
  }

  /**
   * Time Complexity: O(n)
   * Space Complexity: O(1)
   */
  search(key) {
    let node = this.head;
    while (node) {
      if (node.data === key) {
        return node;
      }
      node = node.next;
    }
    return false;
  }

  /**
   * Time Complexity: O(1)
   * Space Complexity: O(1)
   */
  getHead() {
    return this.head;
  }

  /**
   * Time Complexity: O(n)
   * Space Complexity: O(1)
   */
  getTail() {
    let count = 0;
    let node = this.head;
    while (node.next) {
      count++;
      node = node.next;
    }
    return node;
  }

  /**
   * Time Complexity: O(1)
   * Space Complexity: O(1)
   */
  deleteHead() {
    if (this.head === null) return null;
    this.head = this.head.next;
    return this.head;
  }

  /**
   * Time Complexity: O(n)
   * Space Complexity: O(1)
   */
  deleteSpecificNode(position) {
    if (this.head === null) return null;

    if (position === 1) {
      this.head = this.head.next;
      return this.head;
    }

    let node = this.head;
    let prev = null;

    // stop at the node before the position
    for (let i = 1; node !== null && i < position; i++) {
      prev = node;
      node = node.next;
    }

    if (node === null) {
      console.log("Position is out of bounds.");
      return this.head;
    }

    // skip the node at the position
    prev.next = node.next;

    return this.head;
  }

  /**
   * Time Complexity: O(n)
   * Space Complexity: O(1)
   */
  deleteTail() {
    if (this.head === null) return null;

    if (this.head.next === null) {
      this.head = null;
      return null;
    }

    let node = this.head;

    while (node.next && node.next.next) {
      node = node.next;
    }

    const lastNode = node.next;
    node.next = null;
    lastNode.next = null;

    return this.head;
  }

  /**
   * Time Complexity: O(n)
   * Space Complexity: O(1)
   */
  reverse() {
    let prevNode = null;
    let node = this.head;
    let nextNode = null;

    while (node !== null) {
      nextNode = node.next;
      node.next = prevNode;
      prevNode = node;
      node = nextNode;
    }

    this.head = prevNode;
  }

  /**
   * Time Complexity: O(n)
   * Space Complexity: O(1)
   */
  print() {
    let node = this.head;

    while (node) {
      process.stdout.write(node.data + " ");
      node = node.next;
    }

    console.log();
  }
}

let head = new Node(14);
head.next = new Node(21);
head.next.next = new Node(13);
head.next.next.next = new Node(30);
head.next.next.next.next = new Node(10);

const result = new LinkedList(head);

console.log("size", result.size());
console.log("first", result.getHead());
console.log("last", result.getTail());
console.log("search", result.search(66));
console.log("insertAtBeginning", result.insertAtHead(22));
console.log("insertAtTail", result.insertAtTail(33));
console.log("insertAfterANode", result.insertAfterANode(13, 45));
console.log("insertBeforeANode", result.insertBeforeANode(13, 44));
console.log("insertAtSpecificNode", result.insertAtSpecificNode(4, 55));
console.log("deleteHead", result.deleteHead());
console.log("deleteSpecificNode", result.deleteSpecificNode(3));
console.log("deleteTail", result.deleteTail());
console.log("print", result.print());
console.log("reverse", result.reverse());
console.log("print", result.print());
