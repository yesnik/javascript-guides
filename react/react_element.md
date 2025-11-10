# React Element

The `createDivElement` function so that it creates a React Element that represents a div with the text `Hello World!`:

```jsx
import React from 'react';

function createDivElement() {
    return React.createElement('div', {}, 'Hello World!');
}

console.log(createDivElement());
```
