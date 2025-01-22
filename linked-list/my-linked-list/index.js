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
  insertAtBeginning(data) {
    const node = new Node(data);
    node.next = this.head;
    return node;
  }

  /**
   * Time Complexity: O(n)
   * Space Complexity: O(1)
   */
  insertAtEnd(data) {
    let node = this.head;
    if (node === null) {
      this.head = newNode;
      return this.head;
    }
    const newNode = new Node(data);
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
    while (node.next) {
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
  getFirst() {
    return this.head;
  }

  /**
   * Time Complexity: O(n)
   * Space Complexity: O(1)
   */
  getLast() {
    let count = 0;
    let node = this.head;
    while (node.next) {
      count++;
      node = node.next;
    }
    return node;
  }

  print() {
    let node = this.head;
    while (node.next) {
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
console.log("first", result.getFirst());
console.log("last", result.getLast());
console.log("search", result.search(66));
console.log("insertAtBeginning", result.insertAtBeginning(22));
console.log("insertAtEnd", result.insertAtEnd(33));
console.log("insertAfterANode", result.insertAfterANode(13, 45));
console.log("insertBeforeANode", result.insertBeforeANode(13, 44));
console.log("insertAtSpecificNode", result.insertAtSpecificNode(4, 55));
console.log("print", result.print());
