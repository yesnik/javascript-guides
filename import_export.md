# Import, Export

The language-level module system appeared in the standard in 2015, gradually evolved since then, and is now supported by all major browsers and in Node.js.

## Default export

Modules provide a special `export default` ("the default export") syntax to make the "one thing per module" way look better.

```js
export default class Student {
  constructor(name) {
    this.name = name;
  }
}
```

And then import it *without* curly braces:

```js
import Student from './student.js'; // not {Student}, just Student

new Student('Lora');
```

**Note:** `import` needs curly braces for named exports and doesn’t need them for the default one.

## Named export

We export several parts.

File `utils.js`:

```js
export const validate = () => { // ... }
export const clear = () => { // ... }
```

## Import

As modules support special keywords and features, we must tell the browser that a script should be treated as a module, by using the attribute `<script type="module">`. See `index.html`:

```html
<!doctype html>
<script type="module">
  import {greeting} from './greeting.js';

  document.body.innerHTML = greeting('Kenny');
</script>
```

Name in the receiving file is up to us.

```js
// app.js
import student from './student.js'
import pupil from './student.js'
```

We define what part of the file we want to import.

```js
// app.js
import {validate} from './utils.js'
import {validate as Validator} from './utils.js'
import {sayHi as hi, sayBye as bye} from './say.js';
import * as utils from './utils.js'
```
