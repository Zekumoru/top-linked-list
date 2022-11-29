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
    if (index == null || index <= 0) {
      this.prepend(value);
      return;
    }

    if (index >= this.#size) {
      this.append(value);
      return;
    }

    const newNode = new Node(value);

    let current = this.#head;
    for (let i = 1; i < index; i++) current = current.nextNode;

    newNode.nextNode = current.nextNode;
    current.nextNode = newNode;
    this.#size++;
  }

  shift() {
    if (this.#head == null) return null;

    const shifted = this.#head;
    this.#head = shifted.nextNode;
    if (this.#head == null) this.#tail = null;

    this.#size--;
    return shifted;
  }

  pop() {
    if (this.#size === 0) return null;
    if (this.#size === 1) {
      const head = this.#head;
      this.#head = null;
      this.#tail = null;
      this.#size = 0;
      return head;
    }

    let current = this.#head;
    while (current.nextNode.nextNode != null) current = current.nextNode;

    const popped = current.nextNode;
    current.nextNode = null;
    this.#tail = current;
    this.#size--;

    return popped;
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
