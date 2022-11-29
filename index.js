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
