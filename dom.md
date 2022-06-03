# DOM

### `data-*` attributes

```html
<div id="root" data-alias="kenny"></div>
```
```js
const root = document.getElementById('root')
root.dataset // DOMStringMap {alias: 'kenny'}
root.dataset.alias // 'kenny'
```
