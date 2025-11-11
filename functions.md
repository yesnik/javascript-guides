# Functions

## Rest parameters

The `...children` is called *rest parameters* and is a JavaScript feature that lets a function accept and capture any number of arguments. Those arguments will be available as an array.

```js
function displayAll(name, ...children) {
  let result = 'Name: ' + name;
  result += ', items: ';
  result += children.join(', ');
  return result;
}

displayAll('title', 'one', 'two', 5); // Name: title, items: one, two, 5
```
