# React DOM

If you see the code below, please make sure not to use it anymore as it doesn't work in React 19:

```js
import React from "react";
// ❌ This won't work anymore
import {render} from "react-dom";

const root = document.querySelector("#root");

// 👎 This won't work anymore
render(React.createElement("p", {}, "Hello World"), root);
```

The `render` method has been removed in React 19. It's correct way:

```js
import React from "react";
import { createRoot } from "react-dom/client";

const element = React.createElement("p", {}, "Hello World");
const root = document.getElementById('root');

createRoot(root).render(element);
```
