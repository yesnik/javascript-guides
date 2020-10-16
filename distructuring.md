# Distructuring

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
