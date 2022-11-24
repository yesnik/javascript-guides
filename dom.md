# DOM

### createElement, createTextNode, appendChild

```js
const header = document.createElement('h1');
const headerContent = document.createTextNode('Hello Js');
header.appendChild(headerContent);

const app = document.getElementById('app');
app.appendChild(header);
```

### `data-*` attributes

```html
<div id="root" data-alias="kenny"></div>
```
```js
const root = document.getElementById('root')
root.dataset // DOMStringMap {alias: 'kenny'}
root.dataset.alias // 'kenny'
```
