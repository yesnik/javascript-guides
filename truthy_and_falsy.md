# Truthy and Falsy

A ["truthy"](https://developer.mozilla.org/en-US/docs/Glossary/Truthy) value is a value that is considered true when encountered in a Boolean context. 

Common truthy values include:

- `true`
- `42` (any number that isn't 0)
- `"hello"` (any non-empty string)
- `[]` (an empty array)
- `{}` (an empty object)
- `function() {}` (an empty function)

```js
if ("wow") {
  console.log("wow is truthy");
}
```

A ["falsy"](https://developer.mozilla.org/en-US/docs/Glossary/Falsy) value works the same way, but for values that evaluate to false. Common falsy values include:

- `false`
- `0`
- `""` (an empty string)
- `null`
- `undefined`
- `NaN` (Not a Number)

```js
if (!null) {
  console.log("null is falsy");
}
```
