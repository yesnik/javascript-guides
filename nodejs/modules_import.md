# Modules import

## CommonJS

- require
- module.exports

## ES6

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
