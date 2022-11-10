# Import, Export

The language-level module system appeared in the standard in 2015, gradually evolved since then, and is now supported by all major browsers and in Node.js.

## Default export

File `student.js`:

```js
const student = {name: 'Kenny'}

export default student
```

## Named export

We export several parts.

File `utils.js`:

```js
export const validate = () => { // ... }
export const clear = () => { // ... }
```

## Import

Name in the receiving file is up to us.

```js
// app.js
import student from './student.js'
import pupil from './student.js'
```

We define what part of the file we want to import.

```js
// app.js
import { validate } from './utils.js'
import { validate as Validator } from './utils.js'
import * as utils from './utils.js'
```
