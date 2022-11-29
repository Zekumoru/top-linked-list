const Node = require('./linked-list/Node');
const LinkedList = require('./linked-list/LinkedList');

function test(name, object) {
  console.group(name);
  Object.entries(object).forEach(([test, result]) => {
    const output = `${test}: ${result}`;
    if (result) console.log(output);
    else console.error(`ERROR! ${output}`);
  });
  console.groupEnd(name);
  console.log();
}

(function TestConstructor() {
  const list = new LinkedList();
  test('TestConstructor', {
    'Head is null': list.head === null,
    'Tail is null': list.tail === null,
    'Size is 0': list.size === 0,
  });
}());

(function TestConstructorWithValue() {
  const list = new LinkedList('Foo');
  test('TestConstructorWithValue', {
    'Head is set': !!list.head,
    'Tail is head': list.tail === list.head,
    'Size is 1': list.size === 1,
  });
}());

(function TestHeadNullAppend() {
  const list = new LinkedList();
  const value = 'foo';

  list.append(value);
  test('TestHeadNullAppend', {
    'Head is new value': list.head.value === value,
    'Tail is head': list.head === list.tail,
    'Size is 1': list.size === 1,
  });
}());

(function TestAppend() {
  const list = new LinkedList('foo');
  const value = 'bar';

  list.append(value);
  test('TestAppend', {
    'Tail is the new value': list.tail.value === value,
    'Size is correct': list.size === 2,
  });
}());

(function TestMultipleAppend() {
  const list = new LinkedList();

  list.append('foo');
  list.append(2);
  list.append(3);
  list.append('bar');
  list.append('baz');

  test('TestMultipleAppend', {
    'Head is correct': list.head.value === 'foo',
    'Tail is correct': list.tail.value === 'baz',
    'Head\'s next is correct': list.head.nextNode.value === 2,
    'Size is correct': list.size === 5,
  });
}());

(function TestNullHeadPrepend() {
  const list = new LinkedList();
  const value = 'foo';
  list.prepend(value);

  test('TestNullHeadPrepend', {
    'Head is new value': list.head.value === value,
    'Tail is head': list.head === list.tail,
    'Size is 1': list.size === 1,
  });
}());

(function TestPrepend() {
  const list = new LinkedList('foo');

  list.prepend('bar');
  test('TestPrepend', {
    'Head is correct': list.head.value === 'bar',
    'Tail is correct': list.tail.value === 'foo',
    'Size is correct': list.size === 2,
  });
}());

(function TestMultiplePrepend() {
  const list = new LinkedList();

  list.prepend('foo');
  list.prepend(5);
  list.prepend(9);
  list.prepend('bar');
  list.prepend('baz');

  test('TestMultiplePrepend', {
    'Head is correct': list.head.value === 'baz',
    'Tail is correct': list.tail.value === 'foo',
    'Head\'s next is correct': list.head.nextNode.value === 'bar',
    'Size is correct': list.size === 5,
  });
}());

(function TestNullHeadInsertAt() {
  const value = 'foo';
  let list;

  list = new LinkedList();
  list.insertAt(value);
  test('TestInsertAtWithUndefinedIndex', {
    'Head is new value': list.head.value === value,
    'Tail is head': list.head === list.tail,
    'Size is 1': list.size === 1,
  });

  list = new LinkedList();
  list.insertAt(value, -1);
  test('TestInsertAtWithNegativeIndex', {
    'Head is new value': list.head.value === value,
    'Tail is head': list.head === list.tail,
    'Size is 1': list.size === 1,
  });

  list = new LinkedList();
  list.insertAt(value, 5);
  test('TestInsertAtWithHighIndex', {
    'Head is new value': list.head.value === value,
    'Tail is head': list.head === list.tail,
    'Size is 1': list.size === 1,
  });
}());

(function TestInsertAt() {
  let list = new LinkedList();
  let value;

  list.append('foo');
  list.append('bar');
  list.append('baz');

  value = 6;
  list.insertAt(value);

  test('TestInsertAtUndefinedIndex', {
    'Head is correct': list.head.value === value,
    'Tail is correct': list.tail.value === 'baz',
    'Size is correct': list.size === 4,
  });

  value = 22;
  list.insertAt(value, -1);

  test('TestInsertAtNegativeIndex', {
    'Head is correct': list.head.value === value,
    'Tail is correct': list.tail.value === 'baz',
    'Size is correct': list.size === 5,
  });

  value = 'end';
  list.insertAt(value, 111);

  test('TestInsertAtHighIndex', {
    'Tail is correct': list.tail.value === 'end',
  });

  list = new LinkedList();
  list.append('foo');
  list.append('bar');
  list.append('baz');

  value = 'inserted';
  list.insertAt(value, 2);

  test('TestInsertAtSpecificIndex', {
    'Head is correct': list.head.value === 'foo',
    'Tail is correct': list.tail.value === 'baz',
    'Insert is correct': list.head.nextNode.nextNode.value === value,
    'Size is correct': list.size === 4,
  });

  value = 'zero';
  list.insertAt(value, 0);

  test('TestInsertAtZeroIndex', {
    'Head is correct': list.head.value === value,
    'Tail is correct': list.tail.value === 'baz',
    'Insert is correct': list.head.value === value,
    'Size is correct': list.size === 5,
  });
}());

(function TestMultipleInsertAt() {
  const list = new LinkedList();

  list.append('foo');
  list.append('bar');
  list.append('baz');

  list.insertAt(33, 2);
  list.insertAt(34, 2);

  test('TestMultipleInsertAt', {
    'Head is correct': list.head.value === 'foo',
    'Tail is correct': list.tail.value === 'baz',
    'Inserts are correct': list.head.nextNode.nextNode.value === 34 && list.head.nextNode.nextNode.nextNode.value === 33,
    'Size is correct': list.size === 5,
  });
}());

(function TestNullHeadPop() {
  const list = new LinkedList();
  const popped = list.pop();

  test('TestNullHeadPop', {
    'Pop is null': popped == null,
    'Size is 0': list.size === 0,
  });
}());

(function TestHeadPop() {
  const list = new LinkedList('foo');
  const popped = list.pop();

  test('TestHeadPop', {
    'Head is null': list.head == null,
    'Tail is null': list.tail == null,
    'Head is popped': popped.value === 'foo',
    'Size is 0': list.size === 0,
  });
}());
