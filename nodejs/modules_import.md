# Modules import

Node.js treats JavaScript code as CommonJS modules by default. We can tell Node.js to treat JavaScript code as ECMAScript modules via the `.mjs` file extension, the `package.json` `"type"` field, or the `--input-type` flag.

## CommonJS Modules

### Define module

```js
// File calc.js
function addTwo(num) {
  return num + 2;
}

function addThree(num) {
  return num + 3;
}

exports.addTwo = addTwo;
exports.addThree = addThree;
```

Functions and objects are added to the root of a module by specifying additional properties on the special `exports` object.

### Use module

```js
// File index.js
const calc = require('./calc.js');

console.log(calc.addTwo(10)); // 12
console.log(calc.addThree(10)); // 13
```

## ECMAScript modules

Node.js will treat the following as ES modules:

- Files ending in `.mjs`.
- Files ending in `.js` when the nearest parent `package.json` file contains a top-level `"type": "module"`.

### Define module

```js
// File calc.js
function addTwo(num) {
  return num + 2;
}

function addThree(num) {
  return num + 3;
}

export { addTwo, addThree };
```

### Use module

```js
// File index.js
import { addTwo, addThree } from './calc.js';

console.log(addTwo(10)); // 12
console.log(addThree(10)); // 13
```
