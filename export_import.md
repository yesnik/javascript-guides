# Export, Import

The language-level module system appeared in the standard in 2015, gradually evolved since then, and is now supported by all major browsers and in Node.js.

## Named export

```js
// form.js
export const validate = () => { return 'validating'; }
export const clear = () => { return 'clear'; }
```

Import what we want:

```js
// app.js
import {validate} from './form.js';
import {validate as check} from './form.js';
import {validate, clear} from './form.js';
import * as f from './form.js';
```

## Default export

Modules provide a special `export default` ("the default export") syntax to make the "one thing per module" way look better.

```js
export default class Student {
  constructor(name) {
    this.name = name;
  }
}
```

We can:

- import this module *without* curly braces
- use different variable name, not only `Student`

```js
import Student from './student.js'; // not {Student}, just Student
import MyStudent from './student.js'; // we can give a custom name
```

## Import conventions

Team members may use different names to import the same thing, and that's not good. There's a rule that imported variables should correspond to file names:

```js
import User from './user.js';
import LoginForm from './loginForm.js';
import hello from '/path/to/hello.js';
```

Some teams prefer to always use *named exports*, without `export default`: 

```js
export function MyButton({ name }) {
  return <button>{name}</button>;
}
```

Therefore there is only one way to import this module:

```js
import { MyButton } from './components/MyButton';
```

## Script type "module"

As modules support special keywords and features, we must tell the browser that a script should be treated as a module, by using the attribute `<script type="module">`. See `index.html`:

```html
<!doctype html>
<script type="module">
  import {greeting} from './greeting.js';

  document.body.innerHTML = greeting('Kenny');
</script>
```
