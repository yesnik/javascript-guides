# Fetch

## JSON

### GET request

```js
fetch("http://localhost:8080/notifications/new.json")
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

### POST request

```js
fetch('http://localhost:8080/posts', {
  method: 'POST',
  body: JSON.stringify(postData),
  headers: {
    'Content-Type': 'application/json'
  }
});
```

## Text

```js
fetch('https://example.com/info.txt')
  .then((response) => response.text())
  .then((data) => console.log(data));
```
