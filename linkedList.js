class Node {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}

class LinkedList {
  constructor() {
    this.headNode = null;
    this.length = 0;
  }

  // append node to the end of linked list
  append(value) {
    const node = new Node(value);

    if (this.length === 0) {
      this.headNode = node;
    } else {
      let current = this.headNode;

      while (current.nextNode) {
        current = current.nextNode;
      }

      current.nextNode = node;
    }
    this.length++;
  }

  // append node to the start of linked list
  prepend(value) {
    const node = new Node(value);

    if (this.length === 0) {
      this.headNode = node;
    } else {
      node.nextNode = this.headNode;
      this.headNode = node;
    }
    this.length++;
  }

  // insert new node at given index
  insertAt(value, index) {
    if (index < 0 || index > this.length) return "Invalid argument";

    const node = new Node(value);

    if (index === 0) {
      node.nextNode = this.headNode;
      this.headNode = node;
    } else {
      let current = this.headNode;
      let currentIndex = 0;
      let previous = null;
      while (currentIndex < index) {
        previous = current;
        current = current.nextNode;
        currentIndex++;
      }
      node.nextNode = current;
      previous.nextNode = node;
    }

    this.length++;
  }

  // remove node at a given index
  removeAt(index) {
    // if index less than 0 or higher than index of last node, return error
    if (index < 0 || index > this.length - 1) return "Invalid argument";

    let current = this.headNode;

    if (index === 0) {
      this.headNode = current.nextNode;
    } else {
      let previous = null;
      let currentIndex = 0;

      while (currentIndex < index) {
        previous = current;
        current = current.nextNode;
        currentIndex++;
      }

      previous.nextNode = current.nextNode;
    }

    this.length--;
    return current;
  }

  // return size of linked list
  size() {
    return this.length;
  }

  // return first node of linked list
  head() {
    return this.headNode;
  }

  // return last node of linked list
  tail() {
    if (this.length === 0) return null;
    let current = this.headNode;

    while (current.nextNode) {
      current = current.nextNode;
    }

    return current;
  }

  // return node at index in linked list
  at(index) {
    if (index < 0 || index > this.length) return "Incorrect value";

    if (index === 0) {
      return this.headNode;
    } else {
      let current = this.headNode;
      let currentIndex = 0;

      while (currentIndex < index) {
        current = current.nextNode;
        currentIndex++;
      }

      return current;
    }
  }

  // remove node from the end of linked list
  pop() {
    if (this.length === 1) {
      this.headNode = null;
    } else {
      let current = this.headNode;

      while (current.nextNode.nextNode) {
        current = current.nextNode;
      }

      current.nextNode = null;
    }
    this.length--;
  }

  // return index of a node containing {value} or null if not found
  find(value) {
    let index = 0;
    let current = this.headNode;

    while (index < this.length) {
      if (current.value === value) {
        return index;
      }
      current = current.nextNode;
      index++;
    }

    return null;
  }

  // return true if list contains {value}
  contains(value) {
    return this.find(value) ? true : false;
  }

  // return string representation of linked list in format:
  // (value) => (value) => (value) => null
  toString() {
    let string = "";
    let index = 0;
    let current = this.headNode;

    while (index < this.length) {
      string += `(${current.value}) => `;
      current = current.nextNode;
      index++;
    }

    string += "null";

    return string;
  }
}

const list = new LinkedList();
console.log(list.tail());

list.append("one");
list.append("two");
list.append("three");
list.append("four");
list.append("five");
list.prepend("i am first!");

list.append("find me");

list.insertAt("inserted at index", 5);

console.log(list.removeAt(999));

console.log(list.at(3));

console.log(list.toString());
console.log(list.contains("four"));
console.log(list.find("find me"));
