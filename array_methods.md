# Array methods

## map

```js
const nums = [1, 2, 3]
const doubled = nums.map((n) => n * 2)
nums // [1, 2, 3]
doubled // [2, 4, 6]
```

## splice

```js
// Delete item by index
let arr = ['a', 'b', 'c', 'd'];
arr.splice(2, 1); // ['c']
arr // ["a", "b", "d"]

// Insert element in index
let arr = ['a', 'd', 'e']
arr.splice(1, 0, 'b', 'c') // []
arr // ["a", "b", "c", "d", "e"]
```
