# Distructuring

Destructuring is a feature in ECMAScript 6 that enables us to extract values from arrays and object and to assign them to variables using a syntax that is similar to object and array literals. The syntax is useful when passing arguments to a function.

## Functions

```js
function Greet({name, age}) {
    return `Hi ${name}. Your age is ${age}`
}

Greet({name: 'Kenny', age: 19}) // Hi Kenny. Your age is 19
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
const {name, age} = {name: 'Kenny', age: 19}
console.log(name) // 'Kenny'
console.log(age) // 19
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
