# Components

Type of components:

- **Stateful**. Manage state.
- **Stateless**. Don't manage state.

## Pass params

```js
// src/Person/Person.js
import React from "react";

const person = (props) => {
    return (
        <div>
            <p>I am {props.name} and I'm {props.age} years old!</p>
            <p>{props.children}</p>
        </div>
    )
}

export default person;
```

Usage:

```js
<Person name="Natalie" age="18">
    My hobbies: Lego
</Person>
<Person name="Kenny" age="19" />
```
