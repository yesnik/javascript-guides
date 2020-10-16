# Spread and Rest operators

## Spread

```js
const list = ['a', 'b']
const newList = [...list, 'c']
console.log(newList) // ["a", "b", "c"]
console.log(list) // ["a", "b"]
```

```js
const props = {a: 1, b: 2}
const newProps = {...props, c: 3}
console.log(newProps) // {a: 1, b: 2, c: 3}
console.log(props) // {a: 1, b: 2}
```

## Rest

```js
const mySort = (...args) => {
  return args.sort()
}

const res = mySort(2, 1, 3)
console.log(res) // [1, 2, 3]
```
