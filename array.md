# Array

## map

It doesn't modify initial array.

```js
const nums = [1, 2, 3];
nums.map((n) => n * 2); // [2, 4, 6]
nums; // [1, 2, 3]
```

## splice

Delete 2 items by index. It modifies initial array:

```js
let arr = ['a', 'b', 'c', 'd'];
arr.splice(1, 2); // ['b', 'c']
arr; // ['a', 'd']
```

Delete 0 elements, insert 2 at index position:

```js
let arr = ['a', 'd', 'e']
arr.splice(1, 0, 'b', 'c') // []
arr; // ['a', 'b', 'c', 'd', 'e']
```

Delete 3 elements and insert new ones:

```js
let arr = ['a', 'x', 'y', 'z', 'e'];
arr.splice(1, 3, 'b', 'c', 'd'); // ['x', 'y', 'z']
arr; // ['a', 'b', 'c', 'd', 'e']
```
