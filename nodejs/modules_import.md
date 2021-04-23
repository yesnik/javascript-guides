# Modules import

## CommonJS Modules

### Define module

```js
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
const calc = require('./calc.js');

console.log(calc.addTwo(10)); // 12
console.log(calc.addThree(10)); // 13
```

## ECMAScript modules

- import
- exports

The `--experimental-modules` flag can be used to enable support for ECMAScript modules (ES modules). 
To make this flag work with `.js` files we need to include `"type": "module"` into project's `package.json`:

```json
{
  "name": "hello-two",
  "version": "1.0.0",
  "description": "",
  "main": "src/index.js",
  "scripts": {
    "start": "nodemon --experimental-modules"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.17.1"
  },
  "devDependencies": {
    "nodemon": "^1.19.1"
  },
  "type": "module"
}
```
