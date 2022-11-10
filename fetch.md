# Fetch

## JSON
```js
fetch('https://example.com/movies.json')
  .then((response) => response.json())
  .then((data) => console.log(data));
```

## Text
```js
fetch('https://example.com/info.txt')
  .then((response) => response.text())
  .then((data) => console.log(data));
```
