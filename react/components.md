# Components

Type of components:

- **Stateful** (container, smart). Manage state.
- **Stateless** (presentational, dumb). Don't manage state. Try to create components of this type.

## Stateless component

```js
// src/Person/Person.js
import React from "react";

const person = (props) => {
    return (
        <div>
            <p onClick={props.click}>I am {props.name} and I'm {props.age} years old!</p>
            <p>{props.children}</p>
        </div>
    )
}

export default person;
```

## Stateful component

```js
// src/App.js
import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            {name: 'Kenny', age: 18},
            {name: 'Leo', age: 28},
            {name: 'Jenny', age: 21},
        ]
    }

    switchNameHandler = (newName) => {
        this.setState({
            persons: [
                {name: newName, age: 30},
                {name: 'Leo', age: 28},
                {name: 'Penny', age: 25},
            ]
        });
    }

    render() {
        return (
            <div className="App">
                <button onClick={() => this.switchNameHandler('Londa')}>Switch name</button>
                
                <Person
                    name={this.state.persons[1].name}
                    age={this.state.persons[1].age}
                    click={this.switchNameHandler.bind(this, 'Petra')}
                >
                    My hobbies: Lego
                </Person>
            </div>
        );
    }
}

export default App;
```

### Pass params to method


*Way 1*. With `bind`.

```js
<button onClick={this.switchNameHandler.bind(this, 'Lara')}>Switch name</button>
```

*Way 2*. With arrow function. *Not recommended* because it can be inefficient.

```js
<button onClick={() => this.switchNameHandler('Lara')}>Switch name</button>
```


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
