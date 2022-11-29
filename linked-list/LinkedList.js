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
    throw new Error('Stub!');
  }

  prepend(value) {
    throw new Error('Stub!');
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
