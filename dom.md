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

### querySelector, 

```js
document.querySelector('#questions');
document.querySelector('audio[data-key="65"]');
```

## querySelectorAll

```js
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

### style

```js
greet.style = 'color: yellow; background-color: green';
```

### className

```js
greet.className = 'message main';
```

Result:

```
<div class="message main">Hello</div>
```

Changing the element's `class` happens through the `className` property.
That's because the keyword `class` in JavaScript is reserved and is used for creating a JavaScript class that can be called with the `new` operator.

### classList

```js
greet.classList.add('small');
greet.classList; // DOMTokenList(3) ['message', 'main', 'small']
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
