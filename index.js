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
  console.groupEnd('TestConstructor');
  console.log();
}());
