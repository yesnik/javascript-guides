# Operators

## `??`

The [nullish coalescing](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing) operator:

```js
let name = null;
console.log(name ?? "Stranger"); // "Stranger"

name = "Kenny";
console.log(name ?? "Anonymous"); // "Kenny"
```
