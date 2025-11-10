# React Element

The `createDivElement` function so that it creates a React Element that represents a div with the text `Hello World!`:

```jsx
import React from 'react';

React.createElement('div', {}, 'Hello');
// <div>Hello</div>

React.createElement('h1', {className: 'title'}, 'Hi')
// <h1 class="title">Hi</h1>
```
