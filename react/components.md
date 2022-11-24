# Components

React components should be *capitalized* to distinguish them from plain HTML and JavaScript:

```js
function Header() {
  return <h1>Hello</h1>
}
```

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

```jsx
<button onClick={this.switchNameHandler.bind(this, 'Lara')}>Switch name</button>
```

*Way 2*. With arrow function. *Not recommended* because it can be inefficient.

```jsx
<button onClick={() => this.switchNameHandler('Lara')}>Switch name</button>
```

## Pass params

### With props

Regular HTML elements have attributes that you can use to pass pieces of information that change the behavior of those elements. 
For example, `<img src="" />`, `<a href=""></a>`.

In the same way, we can pass pieces of information as properties to React components. These are called `props`.

```jsx
// src/Person/Person.js
import React from "react";

export function Person(props) {
    return (
        <div>
            <p>I am {props.name} and I'm {props.age} years old!</p>
            <p>{props.children}</p>
        </div>
    );
}
```

Usage:

```jsx
<Person name="Natalie" age="18">
    My hobbies: Lego
</Person>
<Person name="Kenny" age="19" />
```

### With destruct

With destructuring it will assign the matching property names/values to the passed in variables. 
The names must match with the properties.

```jsx
function MyInput({name, placeholder}) {
  return (
    <input type="text" name={name} placeholder={placeholder} />
  );
}

export default function App() {
  return (
    <div>
      <MyInput name="student" placeholder="How are you?" />
    </div>
  );
}
```
