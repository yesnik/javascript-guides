# Components

React components should be *capitalized* to distinguish them from plain HTML and JavaScript:

```js
export const Header = () => {
  return <h1>Hello</h1>;
};
```

## Export types

### Default export

File `src/Button.jsx`:

```js
const Button = () => {
  return <button>Click me</button>
}

export default Button;
```

**Note:** It's better to avoid this type of export, because in another file we can choose another name for this component:

```js
import SuperButton from './Button';

<SuperButton />
```

### Named export

File `src/Welcome.jsx`:

```js
export const Welcome = () => {
  return <h2>Welcome!</h2>
};
```
In another file we can't change name of the imported component:

```js
import { Welcome } from './Welcome';
```
**Note:** This export method leads to much easier debugging and maintenance.

## Pass params

### With props

Regular HTML elements have attributes that you can use to pass pieces of information that change the behavior of those elements. 
For example, `<img src="" />`, `<a href=""></a>`.

In the same way, we can pass pieces of information as properties to React components. These are called `props`.

```jsx
// src/Person.js
export const Person = (props) => {
    return (
        <div>
            <p>I am {props.name} and I'm {props.age} years old!</p>
            <p>{props.children}</p>
        </div>
    );
};
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
export const MyInput = ({name, placeholder}) => {
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
