# Functions

## Function Hoisting

In Python, a function must be defined before it's used. But that's not so in JavaScript! 
As long as a function is defined somewhere in the file, it can be called even before the definition.

```js
// Call function before definition
hi();

// Define a function
function hi() {
    return 'hi';
}
```

This works because JavaScript ["hoists"](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting) the function declaration to the top of the file before the code is executed.

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
