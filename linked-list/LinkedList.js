const Node = require('./Node');

module.exports = class LinkedList {
  #head;
  #tail;
  #size;

  constructor(value = null) {
    this.#head = null;
    this.#tail = null;
    this.#size = 0;

    if (value == null) return;

    this.#head = new Node(value);
    this.#tail = this.#head;
    this.#size = 1;
  }

  get size() {
    return this.#size;
  }

  get head() {
    return this.#head;
  }

  get tail() {
    return this.#tail;
  }

  append(value) {
    this.#size++;

    if (this.#head == null) {
      this.#head = new Node(value);
      this.#tail = this.#head;
      return;
    }

    const newNode = new Node(value);

    let current = this.#head;
    while (current.nextNode != null) {
      current = current.nextNode;
    }
    current.nextNode = newNode;
    this.#tail = newNode;
  }

  prepend(value) {
    this.#size++;

    if (this.#head == null) {
      this.#head = new Node(value);
      this.#tail = this.#head;
      return;
    }

    const newNode = new Node(value, this.#head);
    this.#head = newNode;
  }

  insertAt(value, index) {
    throw new Error('Stub!');
  }

  pop() {
    throw new Error('Stub!');
  }

  removeAt(index) {
    throw new Error('Stub!');
  }

  at(index) {
    throw new Error('Stub!');
  }

  contains(value) {
    throw new Error('Stub!');
  }

  find(value) {
    throw new Error('Stub!');
  }

  toString() {
    throw new Error('Stub!');
  }
};
