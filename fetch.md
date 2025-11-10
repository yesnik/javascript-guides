# Fetch

## JSON

```js
fetch("https://example.com/notifications/new.json")
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    document.querySelector("#badge-count").textContent = data.count;
  });
```

## Text

```js
fetch('https://example.com/info.txt')
  .then((response) => response.text())
  .then((data) => console.log(data));
```
