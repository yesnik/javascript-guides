# Distructuring

Destructuring is a feature in ECMAScript 6 that enables us to extract values from arrays and object and to assign them to variables using a syntax that is similar to object and array literals. The syntax is useful when passing arguments to a function.

## Functions

```js
function Greet({name}) {
    return 'Hi, ' + name
}

Greet({name: 'Kenny'}) // Hi, Kenny
```

## Arrays

```js
const [a, b] = [1, 2]
console.log(a) // 1
console.log(b) // 2
a = 3 // TypeError: Assignment to constant variable

const [, ,c] = [1, 2, 3]
console.log(c) // 3
```

## Objects

```js
const {name} = {name: 'Kenny', age: 19}
console.log(name)
console.log(age) // ReferenceError: age is not defined
```
```js
state = {a: 1, b: 2}

newState = {
  ...state,
  b: 22,
  c: 3
}

newState // {a: 1, b: 22, c: 3}
```
