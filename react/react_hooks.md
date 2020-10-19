# React hooks

Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.

```js
// src/App.js
import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {
    const [ personsState, setPersonsState ] = useState({
        persons: [
            {name: 'Kenny', age: 18},
            {name: 'Leo', age: 28},
            {name: 'Jenny', age: 21},
        ]
    });

    const switchNameHandler = () => {
        setPersonsState({
            persons: [
                {name: 'Nickolas', age: 38},
                {name: 'Leo', age: 29},
                {name: 'Jenny', age: 21},
            ]
        });
    }

    return (
        <div className="App">
            <h1>Hello React!</h1>
            <button onClick={switchNameHandler}>Switch name</button>
            <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
        </div>
    );
}

export default App;
```
