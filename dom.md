# DOM

## Document methods

### createElement, createTextNode, appendChild, getElementById

```js
const header = document.createElement('h1');
const headerContent = document.createTextNode('Hello Js');
header.appendChild(headerContent);

const app = document.getElementById('app');
app.appendChild(header);
```

It's an example of *imperative programming*. We’re writing the steps for *how* the user interface should be updated. 
But a *declarative* approach is often preferred. Instead of having to write DOM methods, 
it would be helpful if developers were able to declare *what* they want to show.

React is a popular declarative library that helps developers build user interfaces.

### querySelector, querySelectorAll

```js
document.querySelector('#questions');
document.querySelectorAll('.item');
```

## Document element methods

### classList, id

```js
const greet = document.createElement('div');
greet.id = 'main-info';
greet.classList.add('message');
greet.textContent = 'Hello';

document.getElementById('root').append(greet);
```

Result:

```html
<div id="root">
  <div id="main-info" class="message">Hello</div>
</div>
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
