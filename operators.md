# Operators

## `??`

The [nullish coalescing](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing) operator:

```js
let name = null;
console.log(name ?? "Stranger"); // "Stranger"

name = "Kenny";
console.log(name ?? "Anonymous"); // "Kenny"
```

## `?.`

The [optional chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining) operator:

```js
const student = {
    name: 'Kenny',
    address: {
        city: 'New York'
    }
}

student.address.city // 'New York'
student.workAddress.city // Uncaught TypeError: Cannot read properties of undefined (reading 'city')
student?.workAddress?.city // undefined
```

```js
let hello;
hello(); // Uncaught TypeError: hello is not a function
hello?.() // undefined
```
