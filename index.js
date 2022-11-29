const Node = require('./linked-list/Node');
const LinkedList = require('./linked-list/LinkedList');

(function TestConstructor() {
  const list = new LinkedList();
  console.group('TestConstructor');
  console.log(`Head is null: ${list.head === null}`);
  console.log(`Tail is null: ${list.tail === null}`);
  console.log(`Size is 0: ${list.size === 0}`);
  console.groupEnd('TestConstructor');
  console.log();
}());

(function TestConstructorWithValue() {
  const list = new LinkedList('Foo');
  console.group('TestConstructorWithValue');
  console.log(`Head is set: ${!!list.head}`);
  console.log(`Tail is head: ${list.tail === list.head}`);
  console.log(`Size is 1: ${list.size === 1}`);
  console.groupEnd('TestConstructorWithValue');
  console.log();
}());

(function TestHeadNullAppend() {
  const list = new LinkedList();
  const value = 'foo';

  list.append(value);

  console.group('TestHeadNullAppend');
  console.log(`Head is new value: ${list.head.value === value}`);
  console.log(`Tail is head: ${list.head === list.tail}`);
  console.log(`Size is 1: ${list.size === 1}`);
  console.groupEnd('TestHeadNullAppend');
  console.log();
}());

(function TestAppend() {
  const list = new LinkedList('foo');
  const value = 'bar';

  list.append(value);

  console.group('TestAppend');
  console.log(`Tail is the new value: ${list.tail.value === value}`);
  console.log(`Size is 2: ${list.size === 2}`);
  console.groupEnd('TestAppend');
  console.log();
}());

(function TestMultipleAppend() {
  const list = new LinkedList();

  list.append('foo');
  list.append(2);
  list.append(3);
  list.append('bar');
  list.append('baz');

  console.group('TestMultipleAppend');
  console.log(`Head is correct: ${list.head.value === 'foo'}`);
  console.log(`Tail is correct: ${list.tail.value === 'baz'}`);
  console.log(`Head's next is correct: ${list.head.nextNode.value === 2}`);
  console.log(`Size is 5: ${list.size === 5}`);
  console.groupEnd('TestMultipleAppend');
  console.log();
}());
