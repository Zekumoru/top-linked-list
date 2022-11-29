# Linked List

The sixth project of the JavaScript course from The Odin Project.

# Documentation

## Node

### Constructor

```js
Node(value?, nextNode?)
```

`value` and `nextNode` are both optional and set to `null` by default.

### Properties

#### value

Returns the value in the node.

#### nextNode

Returns the next node.

## LinkedList

### Constructor

```js
LinkedList(value?)
```

`value` is optional and set to `null` by default.

### Properties

#### size

Returns the total number of nodes in the list.

#### head

Returns the first node of the list.

#### tail

Returns the last node of the list.

### Methods

#### append

```js
append(value)
```

Adds a new node containing `value` to the end of the list.
Returns `undefined`.

#### prepend

```js
prepend(value)
```

Adds a new node containing `value` to the start of the list.
Returns `undefined`.

#### insertAt

```js
insertAt(value, index)
```

Inserts a new node containing `value` at the given `index`.
Returns `undefined`.

#### shift

```js
shift()
```

Removes the first node from the list.
Returns the removed node.

#### pop

```js
pop()
```

Removes the last node from the list.
Returns the removed node.

#### removeAt

```js
removeAt(index)
```

Removes the node at the given `index`.
Returns the removed node.

#### at

```js
at(index)
```

Returns the node at the given `index`.

#### contains

```js
contains(value)
```

Returns `true` if the passed `value` is in the list, otherwise, returns `false`.

#### find

```js
find(value)
```

Returns the index of the node containing `value`, or `null` if not in the list.

#### toString

```js
toString()
```

Returns a string representation of the list.
Syntax: `( value ) -> ... -> ( value ) -> null`
