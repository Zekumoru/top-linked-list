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
    if (this.#size <= 1) {
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
    if (index == null || index <= 0) return this.shift();
    if (index >= this.#size) return this.pop();

    let current = this.#head;
    for (let i = 1; i < index; i++) current = current.nextNode;

    const removed = current.nextNode;
    current.nextNode = removed.nextNode;
    if (removed === this.#tail) this.#tail = current;

    this.#size--;
    return removed;
  }

  at(index) {
    if (index == null) return null;
    if (index < 0) return null;
    if (index >= this.#size) return null;

    let current = this.#head;
    for (let i = 0; i < index; i++) current = current.nextNode;

    return current;
  }

  contains(value) {
    let current = this.#head;
    while (current != null) {
      if (current.value === value) return true;
      current = current.nextNode;
    }
    return false;
  }

  find(value) {
    let current = this.#head;
    for (let i = 0; current != null; i++) {
      if (current.value === value) return i;
      current = current.nextNode;
    }
    return null;
  }

  toString() {
    throw new Error('Stub!');
  }
};
